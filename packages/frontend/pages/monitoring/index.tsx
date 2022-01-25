import ResellerLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { AuthInterface } from "types";

const Monitoring = () => {
  return (
    <ResellerLayout>
      <div>Monitoring</div>
    </ResellerLayout>
  );
};

Monitoring.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Monitoring;
