import { useRef } from "react";
import CalenderIcon from "../assets/icons/CalenderIcon";
import CheveronDown from "../assets/icons/CheveronDown";
import clsx from "clsx";

type DateInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (formattedDate: string) => void;
  className?: string; // ✅ Add className prop for external styling
};

export default function DateInput({
  placeholder = "Select date",
  value = "",
  onChange,
  className = "", // Default empty string to prevent undefined issues
}: DateInputProps) {
  const dateRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => dateRef.current?.showPicker();

  // Convert `YYYY-MM-DD` → `DD-MM-YYYY` for display
  const formatToDisplay = (date: string) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  // Convert `DD-MM-YYYY` → `YYYY-MM-DD` for input field
  const formatToInput = (date: string) => {
    if (!date) return "";
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <div
      className={clsx(
        "relative border flex rounded-[36px] h-9 px-2 py-1 text-sm items-center cursor-pointer",
        className // ✅ Allow custom styles via props
      )}
      onClick={handleDateClick}
    >
      <div className="pointer-events-none flex items-center px-2 text-gray-700">
        <CalenderIcon />
      </div>
      <span className={`flex-grow ms-1 ${value ? "text-black" : "text-gray-400"}`}>
        {value ? value : placeholder}
      </span>
      <div className="pointer-events-none flex items-center px-2 text-gray-700">
        <CheveronDown color="gray" />
      </div>

      <input
        type="date"
        ref={dateRef}
        className="absolute inset-0 opacity-0 top-8 cursor-pointer"
        value={value ? formatToInput(value) : ""}
        onChange={(e) => onChange?.(formatToDisplay(e.target.value))}
      />
    </div>
  );
}
