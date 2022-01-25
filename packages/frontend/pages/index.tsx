import UserLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { signOut } from "next-auth/react";
import { AuthInterface } from "types";

const Home = () => {
  return (
    <UserLayout>
      {/* <div>Home</div> */}
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </UserLayout>
  );
};

Home.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Home;
