"use client";

import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updateBlog, getBlogDetails } from "@/api/servies/userService";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

const BlogSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    image: Yup.mixed(), // Optional for editing
    brief: Yup.string().required("Brief description is required"),
    content: Yup.string().required("Content is required"),
});

export function EditBlog() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [initialValues, setInitialValues] = useState({
        title: "",
        image: null,
        brief: "",
        content: "",
    });
    const navigate = useNavigate();
    const { blogId } = useParams();
    useEffect(() => {

        const fetchBlogDetails = async () => {
            try {
                const { blog } = await getBlogDetails(`/getBlogDetails/?blogId=${blogId}`);
                setInitialValues({
                    title: blog.title,
                    image: null,
                    brief: blog.brief,
                    content: blog.content,
                });
                if (blog.imageUrl) {
                    setImagePreview(blog.imageUrl);
                }
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };

        fetchBlogDetails();
    }, []);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
        const file = event.target.files?.[0];
        if (file) {
            setFieldValue("image", file);
            console.log("image", file);


            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = (setFieldValue: any) => {
        setFieldValue("image", null);
        setImagePreview(null);
    };

    const handleSubmit = (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log("Submitting updated blog:", values);

        const updatedPost = new Promise((resolve, reject) => {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            setTimeout(() => {
                updateBlog(`/updateBlog/?blogId=${blogId}`, values, config)
                    .then((data: any) => {
                        resolve({ message: "Your Blog has been updated" });
                        setSubmitting(false);
                    })
                    .catch((error) => {
                        reject(error);
                        setSubmitting(false);
                    });
            }, 1500);
        });

        toast.promise(updatedPost, {
            loading: "Updating blog...",
            success: (data: any) => {
                navigate("/home");
                return data.message;
            },
            error: "Error updating blog",
        });
    };


    const handleCancelEdit = () => {
        toast('Are you sure you want to cancel editing?', {
          action: {
            label: 'Yes',
            onClick: () => navigate('/home'), // Replace with actual cancel logic
          },
          cancel:{
            label:'No',
            onClick:()=> ''
          },
          duration: 4000, 
        });
      };



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 sm:p-5">
            <div className="w-full max-w-3xl p-8 bg-white rounded-md shadow-lg border border-gray-200">
                <h1 className="text-2xl font-bold text-start mb-6">Edit Blog</h1>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={BlogSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="space-y-6">
                            {/* Title Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <Field
                                    name="title"
                                    as={Input}
                                    placeholder="Enter blog title"
                                    className="w-full"
                                />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Image Upload Field */}
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">Image</Label>
                                <Input
                                    type="file"
                                    id="picture"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, setFieldValue)}
                                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                                />
                                <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
                                {imagePreview && (
                                    <div className="mt-4 relative">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-md border"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            className="absolute top-2 right-2 text-red-500"
                                            onClick={() => handleImageRemove(setFieldValue)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Brief Description Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Brief Description</label>
                                <Field
                                    name="brief"
                                    as={Textarea}
                                    placeholder="Enter a brief description"
                                    className="w-full"
                                />
                                <ErrorMessage name="brief" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Main Content Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Main Content</label>
                                <Field
                                    name="content"
                                    as={Textarea}
                                    placeholder="Write your main content here"
                                    className="w-full"
                                />
                                <ErrorMessage name="content" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <Button type="submit" className="w-full " disabled={isSubmitting} >
                                    {isSubmitting ? "Updating..." : "Update Blog"}
                                </Button>

                                <Button type="button" onClick={handleCancelEdit}  className="w-full mt-4 bg-gray-200  hover:bg-gray-400" disabled={isSubmitting} variant={"secondary"} color="gray" >
                                    {/* {isSubmitting ? "Updating..." : "Update Blog"}
                                     */}
                                     Cancel
                                </Button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
