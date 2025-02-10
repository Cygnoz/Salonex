type Props = { color: string, size?: string };

function CheveronUp({ color, size }: Props) {
  return (
    <div>
      <svg
        width={size ? size : "16"}
        height={size ? size : "16"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default CheveronUp;
