import Header from "./Header";
import Sidebar from "./Sidebar";

const ResellerLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[1fr] grid-rows-[auto,1fr] lg:grid-cols-[auto,1fr] lg:grid-rows-[auto,1fr] h-screen">
      <Sidebar className="hidden lg:grid row-span-2" />
      <Header className="" />
      <div className="h-full overflow-y-auto w-full pt-6">{children}</div>
    </div>
  );
};

export default ResellerLayout;
