import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useFormik } from "formik";
import { registerValidationSchema } from "@/utils/validation/registerValidation";
import { userRegister } from "@/api/servies/userService";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/fireBase/config'
import { toast } from "sonner";
import { useAppDispatch } from "@/Redux/hooks";
import { googleAuth } from "@/Redux/services/authService";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {


        await userRegister('/register', values);
        toast.success('registration success')
        const { email } = values
        navigate('/otp', { state: { email } });
        setIsLoading(false);
      } catch (error: any) {
        formik.setErrors({ email: "Registration failed. Try again." });
        toast.info(error.response.data)
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleGoogleLogin = async (): Promise<void> => {
    setIsLoading(true);

    await signInWithPopup(auth, provider).then((data) => {

      const userData = {
        name: data.user.displayName,
        email: data.user.email,
        profilePic: data.user.photoURL
      }

      dispatch(googleAuth({ endpoint: "/googleLogin", userData: userData }))
        .unwrap()
        .then(() => {
          toast.success("Welcome to Aura!!");
          setIsLoading(false);
          navigate('/home');
        })
        .catch((err: any) => {
          console.error(err)
          setIsLoading(false);
          formik.setErrors({ email: "Google login failed." });
          toast.error("google authentication failed please try again")
        }
        );
    });
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create your account by filling in the details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.name && formik.errors.name ? "border-red-500" : ""}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.email && formik.errors.email ? "border-red-500" : ""}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.password && formik.errors.password ? "border-red-500" : ""}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : ""}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading || !formik.isValid}>
              {isLoading ? "Loading..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login with Google"}
          </Button>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </div>
        </CardFooter>

      </Card>
    </div>
  );
}
