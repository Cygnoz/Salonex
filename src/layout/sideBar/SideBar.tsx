import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { navList } from "../../assets/constants/Navlist";
import logo from '../../assets/Images/logo_salonex.png';

type Props = {
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
};

const SideBar = ({ activeIndex, setActiveIndex }: Props) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync activeIndex with the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedIndex = navList.findIndex((item) => {
      if (item.subhead) {
        return item.subhead.some(() => currentPath.startsWith(item.route));
      }
      return currentPath === item.route;
    });

    if (matchedIndex !== -1) {
      setActiveIndex(matchedIndex);
      localStorage.setItem("savedIndex", matchedIndex.toString());
      itemRefs.current[matchedIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.pathname, setActiveIndex]);

  const handleClick = (index: number, route: string) => {
    setActiveIndex(index);
    localStorage.setItem("savedIndex", index.toString());
    localStorage.setItem("savedSelectedIndex", "0");

    // Handle subhead navigation like Swenex
    const item = navList[index];
    if (item.subhead && item.subhead.length > 0) {
      navigate(item.subhead[0].subRoute);
    } else {
      navigate(route);
    }

    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <aside className="bg-[#C96E76] h-[100vh] overflow-y-scroll hide-scrollbar w-32 text-white">
      <div className="text-center flex justify-center items-center py-6">
        <span className=""><img src={logo} className="w-14" alt="Salonex Logo" /></span>
      </div>
      <ul className="flex justify-center items-center my-2">
        <div>
          {navList.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleClick(index, item.route)}
              className={`relative items-center px-3 rounded-2xl py-3 cursor-pointer 
                ${activeIndex === index ? "bg-[#E98B93]" : "hover:bg-[] "}`}
            >
              <div className="flex justify-center items-center">
                {item.icon && <item.icon color="white" />}
              </div>
              <span
                className="text-[11px] mt-1 font-semibold flex justify-center items-center text-center text-[#FAF1F1]"
              >
                {item.nav}
              </span>
            </li>
          ))}
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
