import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import SettingsSidebar from "./SettingsSideBar";

type Props = {
};

const SettingsLayout = ({}: Props) => {
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex relative">
    <SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
  
    {/* Main Content Wrapper */}
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      
      {/* Fixed Header */}
      <div
        className="fixed top-0 z-50 "
        style={{
          width: "calc(100% - 7%)" , 
          left:  "7%", // Adjust based on sidebar width
        }}
      >
        <Header />
      </div>
  
      {/* Content with Scrollable Section */}
      <div className="flex gap-6 mx-4 relative overflow-y-auto hide-scrollbar h-[calc(100vh-60px)] mt-20">
        
        {location.pathname !== "/settings" && <SettingsSidebar />}
        
        <div
          className="w-full"
          style={{
            marginLeft: location.pathname !== "/settings" ? "18%" : "0",
          }}
        >
          <Outlet />
        </div>
  
      </div>
    </div>
  </div>
  
  );
};

export default SettingsLayout;
