import UserLayout from "@/components/layouts/ResellerLayout";
import { useAppSelector } from "@/configs/redux/hooks";

const Layout = ({ children }) => {
  const step = useAppSelector((props) => props.order.step);

  return (
    <UserLayout>
      <div className="mx-20">
        <div className="w-full mb-12 text-center">
          <h1 className="text-primary text-5xl">Buat Order</h1>
          <small className="text-xs text-gray-400">
            Kirim paketmu dengan mudah tanpa ribet, cukup buat order kami yang
            handle
          </small>
        </div>

        <div className="flex w-full justify-center gap-10 mb-10">
          <Steper text="Penjemputan" isActive={step === "pickup"} />
          <Steper text="Input Paket" isActive={step === "packet"} />
          <Steper text="Review" isActive={step === "review"} />
        </div>
        <div>{children}</div>
      </div>
    </UserLayout>
  );
};

const Steper = ({ text, isActive = false, className = "" }) => {
  return (
    <div className={`w-[175px] text-center ${className}`}>
      <small
        className={`text-xs font-medium ${
          isActive ? "text-primary" : "text-gray-400"
        }`}
      >
        {text}
      </small>
      <div
        className={`w-full h-[13px] rounded-md ${
          isActive ? "bg-primary" : "bg-gray-400"
        }`}
      ></div>
    </div>
  );
};

export default Layout;
