import * as yup from "yup";
import Input from "@/components/common/baseInput/Input";
import { useFormik } from "formik";
import { useAppDispatch } from "@/configs/redux/hooks";
import { loginMutation } from "@/lib/mutation/AuthMutation";

interface IFormikValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: "fitra",
      password: "123456789",
    },
    onSubmit: async ({ username, password }: IFormikValues) => {
      loginMutation({
        username,
        password,
        dispatch,
      });
    },
    validationSchema: yup.object({
      username: yup.string().min(5).max(255).required(),
      password: yup.string().min(5).max(255).required(),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="username"
          label="Username"
          autoComplete="none"
          type="text"
          stage={
            formik.touched.username && formik.errors.username
              ? "error"
              : "default"
          }
          inputDescription={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
          {...formik.getFieldProps("username")}
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
        </div>
      </form>
    </>
  );
};

export default LoginForm;
