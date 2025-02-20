import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import SubHeader from "./SubHeader/Subheader";
import { navList } from "../assets/constants/Navlist";
navList
type Props = {};

const Layout = ({ }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const savedIndex = localStorage.getItem("savedIndex");
    if (savedIndex !== null) {
      setActiveIndex(Number(savedIndex));
    }
  }, []);

  const shouldShowSubHeader =
    location.pathname !== "/accountant/viewOne" &&
    location.pathname !== "/accountant/newJournal" &&
    location.pathname !== "/accountant/viewOneJournal";


  return (
    <div className="flex">
      <SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="w-[100%] h-[100vh] overflow-y-scroll hide-scrollbar">
      <div
        className="fixed top-0 z-50 "
        style={{
          width: "calc(100% - 9%)" , 
          left:  "9%", // Adjust based on sidebar width
        }}
      >
        <Header />
      </div>
        <div className="px-6 mt-20">
          {shouldShowSubHeader && activeIndex !== null && navList[activeIndex]?.subhead && (
            <SubHeader activeIndex={activeIndex} />
          )}
          <div className={navList[activeIndex ?? 0]?.subhead ? "mt-4" : "my-0 mt-20"}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
