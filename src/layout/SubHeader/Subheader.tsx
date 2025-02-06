import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList } from "../../assets/constants/Navlist";

type Props = {
  activeIndex: number | null;
};

const SubHeader = ({ activeIndex }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const location = useLocation();

  useEffect(() => {
    if (activeIndex !== null && navList[activeIndex]?.subhead) {
      // Find the matching subhead index based on current route
      const currentSubIndex = navList[activeIndex].subhead?.findIndex(
        (item) => item.subRoute === location.pathname
      );
      if (currentSubIndex !== -1) {
        setSelectedIndex(currentSubIndex);
        localStorage.setItem("savedSelectedIndex", currentSubIndex.toString());
      }
    }
  }, [activeIndex, location.pathname]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    localStorage.setItem("savedSelectedIndex", index.toString());
  };

  return (
    <div className="bg-[#FFFFFF] flex p-[4px] items-center rounded-full">
      <div className="flex items-center gap-4">
        {activeIndex !== null &&
          navList[activeIndex] &&
          navList[activeIndex]?.subhead &&
          navList[activeIndex]?.subhead.map((item, index) => (
            <Link to={item.subRoute} key={index}>
              <div
                className={`font-semibold text-[12px] text-[#585953] py-2 px-4 rounded-full cursor-pointer ${
                  selectedIndex === index ? "bg-[#F7E9EA]" : "hover:bg-white"
                }`}
                onClick={() => handleSelect(index)}
              >
                {item.headName}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SubHeader;
