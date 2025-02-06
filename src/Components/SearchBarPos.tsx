import { ChangeEvent } from "react";
import SearchPosIcon from "../assets/icons/SearchPosIcon";

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
};

const SearchBarPos = ({ searchValue, onSearchChange, placeholder = "search" }: Props) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative w-full h-[44px]">
      {/* Search Icon Inside Input */}
      <div className="absolute left-3 top-1/2 transform -translate-y-[60%]">
        <SearchPosIcon />
      </div>

      {/* Search Input */}
      <input
        className="pl-10 text-sm w-full text-gray-800 h-10 p-2 border-0 bg-white rounded-full outline-none"
        placeholder={placeholder}
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBarPos;
