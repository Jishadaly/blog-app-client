"use client";

import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createBlog } from "@/api/servies/userService";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BlogSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    image: Yup.mixed().required("Image is required"),
    brief: Yup.string().required("Brief description is required"),
    content: Yup.string().required("Content is required"),
});

export function CreateBlog() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        image: null,
        brief: "",
        content: "",
    };

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

    const handleSubmit = (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log(values); 

        const addedPost = new Promise((resolve, reject) => {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            setTimeout(() => {
                createBlog('/createBlog', values, config)
                    .then((data: any) => {
                        console.log("blogdata", data);

                        resolve({ message: "Your Blog is Published" });
                        setSubmitting(false);
                    }).catch((error) => {
                        reject(error);
                        setSubmitting(false)
                    });
            }, 1500);
        });

        toast.promise(addedPost, {
            loading: 'Blog publishing..',
            success: (data: any) => {
                navigate('/home');
                return data.message
            },
            error: 'Error publishing blog',
        });

      
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 sm:p-5">
            <div className="w-full max-w-3xl p-8 bg-white rounded-md shadow-lg border border-gray-200">
                <h1 className="text-2xl font-bold text-start mb-6">Create a New Blog</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={BlogSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="space-y-6">
                          
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

                           
                            <div >
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

                           
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Create Blog"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
