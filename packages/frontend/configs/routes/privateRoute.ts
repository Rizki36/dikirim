import cookies from "next-cookies";

// middleware for private route / must loggedin
const privateRoute = (getServerSideProps) => {
  return async (ctx) => {
    const req = ctx;
    const isAuth = cookies(req).user_isAuth;
    if (!isAuth) {
      return {
        redirect: {
          permanent: true,
          destination: "/login",
        },
      };
    }

    return await getServerSideProps(ctx);
  };
};

export default privateRoute;
