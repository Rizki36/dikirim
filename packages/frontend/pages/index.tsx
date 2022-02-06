import ResellerLayout from "@/components/layouts/ResellerLayout";
import { Page } from "../types";

const Home: Page = () => {
  return (
    <div>
      {/* <div>Home</div> */}
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  );
};

Home.layout = ResellerLayout

export default Home;
