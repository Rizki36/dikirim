import "react-toastify/dist/ReactToastify.css";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import LoginView from "@/components/pages/auth/login/LoginView";
import { Page } from "@/types/index";

const Login: Page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <LoginView />
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

Login.layout = Fragment;
Login.auth = {
  mustLoggedIn: false,
};

export default Login;
