import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import { settingsList } from "./SettingsList";
import ChevronLeft from "../../assets/icons/ChevronLeft";

type Props = {};

const SettingsSidebar = ({}: Props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedMain, setSelectedMain] = useState<number | null>(null);
  const [selectedSub, setSelectedSub] = useState<{
    mainIndex: number | null;
    subIndex: number | null;
  }>({ mainIndex: null, subIndex: null });

  useEffect(() => {
    settingsList.forEach((main, mainIndex) => {
      if (location.pathname.includes(main.nav)) {
        setSelectedMain(mainIndex);
      }
      main.subhead.forEach((sub, subIndex) => {
        if (location.pathname === sub.subRoute) {
          setSelectedMain(mainIndex);
          setSelectedSub({ mainIndex, subIndex });
        }
      });
    });
  }, [location]);

  const handleSubClick = (mainIndex: number, subIndex: number) => {
    setSelectedMain(mainIndex);
    setSelectedSub({ mainIndex, subIndex });
  };

  const handleBackClick = () => {
    navigate("/settings");
  };

  return (
    <div className="fixed h-[92vh] pt-5 pb-16 hide-scrollbar col-span-3 border-neutral-300 text-textColor border-r-2 px-7 border bg-white w-[15%]">
      {/* Back Button */}
      <button onClick={handleBackClick} className="flex border border-[#CECECE] py-[12px] px-[12px] rounded-lg">
        <ChevronLeft color="#495160" className="h-5 w-5 me-2" />
        <p className="text-sm text-[#495160] text-[14px] font-semibold">Back</p>
      </button>
  
      {/* Search Bar & Header */}
      <div className="relative mt-6">
        <p className="text-[16px] text-[#0B1320] font-bold">Settings</p>
        <div className="mt-4">
          <SearchBar placeholder="Search" onSearchChange={setSearch} searchValue={search} />
        </div>
      </div>
  
      {/* Scrollable Settings List */}
      <div className=" overflow-y-auto h-[calc(92vh-180px)] hide-scrollbar">
        {settingsList.map((main, mainIndex) => (
          <div key={main.nav}>
            <div
              className={`relative flex items-center text-lg gap-3   p-2 mt-5 mb-2 rounded-lg cursor-pointer ${
                selectedMain === mainIndex || selectedSub.mainIndex === mainIndex ? "bg-[#F7E9EA] " : ""
              }`}
            >
              {main.icon && <main.icon color={"#495160"} />}
              <p className="font-semibold text-sm text-[#495160]">{main.nav}</p>
            </div>
  
            <ul>
              {main.subhead.map((sub, subIndex) => (
                <Link to={sub.subRoute || "#"} key={sub.headName}>
                  <li
                    className={`my-4 mb-6 text-sm cursor-pointer ${
                      selectedSub.mainIndex === mainIndex && selectedSub.subIndex === subIndex
                        ? "text-[#C96E76] font-bold text-xs"
                        : "font-semibold text-dropdownText text-[#495160] text-xs"
                    }`}
                    onClick={() => handleSubClick(mainIndex, subIndex)}
                  >
                    <div className="">{sub.headName}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SettingsSidebar;
