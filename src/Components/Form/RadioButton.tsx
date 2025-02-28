import React from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  label?: string;
  selected: string;
  className?: string;
  onChange: (value: string, name: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  selected,
  className,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className="flex gap-2 justify-center items-center cursor-pointer"
    >
      <div className="grid place-items-center">
        <input
          id={id}
          type="radio"
          name={name}
          className={`col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 rounded-full border ${
            selected === id
              ? "border-[5px] border-[#C96E76]"
              : "border-1 border-neutral-400"
          }`}
          checked={selected === id}
          onChange={() => onChange(id, name)}
        />
        <div
          className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
            selected === id ? "bg-neutral-100" : "bg-transparent"
          }`}
        />
      </div>
      <span className={className || "text-start text-xs font-medium text-[#495160]"}>
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
