import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/validation/loginValidaiton";
import { useNavigate } from "react-router-dom";
import { googleAuth, loginUser } from "@/Redux/services/authService";
import { toast } from "sonner";
import { useAppDispatch } from "@/Redux/hooks";
import { signInWithPopup } from 'firebase/auth';
import {auth , provider} from '../utils/fireBase/config'




export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { error } = useAppSelector((state) => state.auth);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {

        const { email, password } = values;
        await dispatch(loginUser({ endpoint: '/login', userData: { email, password } }))
          .unwrap()
          .then(() => {
            toast.success("Welcome to Aura!!");
            navigate('/home');
          })
          .catch((err: any) => {
            console.error("ererrer", err)
            toast.error(err)
          }
          )
      } catch (error: any) {
        formik.setErrors({ email: "Login failed. Try again." });
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
        .catch((err:any) => {
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
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
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
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>
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
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                ) : null}
              </div>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading || !formik.isValid}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login with Google"}
          </Button>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
