import * as yup from "yup";
import Input from "@/components/baseInput/Input";
import { useFormik } from "formik";
import { getSession, signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { AuthInterface } from "../../../types/index";
import backendApi from "@/configs/api/backendApi";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value: { email: string; password: string }) => {
      try {
        const res = await signIn("credentials", {
          email: value.email,
          password: value.password,
          redirect: false,
        });
        if (res.error) {
          // error
          console.log(res.error);
          return;
        }
        console.log(res);
        window.location.replace(res.url);
      } catch (error) {
        toast.error(error.msg ?? "Terjadi kesalahan.");
        console.log(error);
      }
    },
    validationSchema: yup.object({
      email: yup.string().min(5).max(255).required(),
      password: yup.string().min(5).max(255).required(),
    }),
  });

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            label="Email"
            autoComplete="none"
            type="text"
            stage={
              formik.touched.email && formik.errors.email ? "error" : "default"
            }
            inputDescription={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
            {...formik.getFieldProps("email")}
          />

          <Input
            label="Password"
            id="password"
            type="text"
            name="password"
            stage={
              formik.touched.password && formik.errors.password
                ? "error"
                : "default"
            }
            inputDescription={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
            {...formik.getFieldProps("password")}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-indigo-800 text-white py-2 px-3 rounded-lg"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-indigo-800 text-white py-2 px-3 rounded-lg"
              onClick={() => {
                signIn("google");
              }}
            >
              Google
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

Login.auth = {
  authenticatedRedirect: "/",
} as AuthInterface;

export default Login;
