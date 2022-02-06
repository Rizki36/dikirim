import Image from "next/image";
import imgPlaceholderUser from "@/public/user-placeholder.jpg";

const ProfileCard = ({ className = "", ...props }) => {
  const amount = "100000";
  const name = "Jhon Doe";

  return (
    <div
      className={`py-5 px-4 rounded-xl flex items-center bg-primary w-full ${className}`}
      {...props}
    >
      <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden">
        <Image layout="fill" src={imgPlaceholderUser} alt="User Image" />
      </div>
      <div className="ml-4">
        <h5 className="font-bold text-white">{name}</h5>
        <h6 className="font-medium text-white opacity-60">{amount}</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
