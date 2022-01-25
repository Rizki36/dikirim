import ResellerLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { AuthInterface } from "types";

const Reports = () => {
  return (
    <ResellerLayout>
      <div>reports</div>
    </ResellerLayout>
  );
};

Reports.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Reports;
