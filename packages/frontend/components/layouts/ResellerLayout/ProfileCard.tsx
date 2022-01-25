import Image from "next/image";
import imgPlaceholderUser from "@/public/user-placeholder.jpg";
import { useSession } from "next-auth/react";

const ProfileCard = ({ className = "", ...props }) => {
  const { data: session, status } = useSession();
  const { user } = session;

  // const {
  //   data: user,
  // }: { data?: { data: { avatar: string; first_name: string } } } = useSWR(
  //   ["https://reqres.in/api/users/7"],
  //   (url) => axios.get(url).then((res) => res.data)
  // );

  const amount = "100000";
  return (
    <div
      className={`py-5 px-4 rounded-xl flex items-center bg-primary w-full ${className}`}
      {...props}
    >
      <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden">
        <Image
          layout="fill"
          src={user.image ? user.image : imgPlaceholderUser}
          alt="User Image"
        />
      </div>
      <div className="ml-4">
        <h5 className="font-bold text-white">{user.name}</h5>
        <h6 className="font-medium text-white opacity-60">{amount}</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
