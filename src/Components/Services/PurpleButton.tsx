import { IoIosArrowRoundForward } from "react-icons/io";
type PurpleButtonProps = {
  text: string;
};

const PurpleButton: React.FC<PurpleButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#5050fa] text-white cursor-pointer group pl-5 pr-4 py-2 rounded-full text-sm mt-4 flex items-center">
      {text}
      <IoIosArrowRoundForward className="text-2xl ml-1 group-hover:translate-x-1 duration-300" />
    </button>
  );
};

export default PurpleButton;
