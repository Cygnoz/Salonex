import { cva } from "class-variance-authority";
import clsx from "clsx"; // Import clsx

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "fourthiary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const buttonVariants = cva("flex text-center items-center transition duration-250 ease-in-out", {
  variants: {
    variant: {
      primary:
        "bg-primary_main hover:bg-primary_hover active:bg-primary_active disabled:bg-primary_disabled rounded-[16px] gap-2 border-gray-500 text-white text-sm font-semibold",
      secondary:
        "bg-secondary_main hover:bg-secondary_hover active:bg-secondary_active disabled:bg-secondary_disabled rounded-[16px] gap-2 border border-outlineButton_secondary text-outlineButton_secondary text-sm",
      tertiary:
        "bg-tertiary_main hover:bg-tertiary_hover active:bg-tertiary_active disabled:bg-tertiary_disabled rounded-[16px] gap-2 border border-outlineButton_tertiary text-outlineButton_tertiary text-sm",
      fourthiary:
        "bg-fourthiary_main hover:bg-fourthiary_hover active:bg-fourthiary_active disabled:bg-fourthiary_disabled rounded-[16px] gap-2 border border-gray-500 text-white text-sm",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-4 h-[42px]",
      lg: "px-7 py-3",
      xl: "px-9 py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(buttonVariants({ variant, size }), className); // Use clsx to merge classes properly

  return <button type={type} {...props} className={combinedClassName} />;
}
