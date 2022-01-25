import Image from "next/image";
import trackingIcon from "@/public/icons/menus/tracking.svg";

const InputSearch = ({ className = "", classNameInput = "", ...props }) => {
  return (
    <div
      className={`relative flex items-center transition-all opacity-60 focus-within:opacity-100 ${className}`}
    >
      <div className="absolute ml-3 mt-2">
        <Image src={trackingIcon} width={15} alt="" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className={`outline-none bg-gray-100 border-0 px-9 py-2 rounded-md ${classNameInput}`}
        {...props}
      />
    </div>
  );
};
export default InputSearch;
