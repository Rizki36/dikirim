import ResellerLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { AuthInterface } from "types";

const Tracking = () => {
  return (
    <ResellerLayout>
      <div>tracking</div>
    </ResellerLayout>
  );
};

Tracking.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Tracking;
