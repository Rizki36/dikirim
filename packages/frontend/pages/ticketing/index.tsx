import ResellerLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { AuthInterface } from "types";

const Ticketing = () => {
  return (
    <ResellerLayout>
      <div>ticketing</div>
    </ResellerLayout>
  );
};

Ticketing.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Ticketing;
