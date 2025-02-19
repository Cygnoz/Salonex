import { useNavigate } from "react-router-dom";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import NotificationIcon from "./headerIcons/NotificationIcon";
import defaultOrganizationImage from "../../assets/images/personImage.png";
import SignOut from "./headerIcons/SignOut";
import QuestionIcon from "../../assets/icons/QuestionIcon";
import LenseIcon from "../../assets/icons/LenseIcon";
import { Toaster } from "react-hot-toast";
type Props = {};

function Header({ }: Props) {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    localStorage.setItem("index", "12");
    navigate("/settings");
  };

  return (
    <div className="w-full p-4 flex items-start bg-[#F8F4F4]">
      <div className="relative w-[498px]">
        <LenseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-3 py-2 rounded-[50px] text-sm bg-white text-[#495160]"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-5 ml-auto">
        <div className="flex items-center justify-center bg-white rounded-[48px] px-3 py-2">
          <img src={defaultOrganizationImage} className="w-7" alt="Organization" />
          <div className="ms-3">
            <p className="text-xs font-semibold">Admin</p>
            <p className="text-[8px]">john@gmail.com</p>
          </div>
          <div className="px-3">
            <SignOut />
          </div>
        </div>
        <div className="cursor-pointer bg-white  p-2.5 rounded-full" onClick={handleSettingsClick}>
          <SettingsIcon color="#495160" width="18" height="18" />
        </div>
        <div className="cursor-pointer bg-white  p-2.5 rounded-[40px]">
          <NotificationIcon />
        </div>
        <div className="cursor-pointer bg-white  p-2.5 rounded-[40px]">
          <QuestionIcon />
        </div>
      </div>
        <Toaster reverseOrder={false} />
    </div>
  );
}

export default Header;
