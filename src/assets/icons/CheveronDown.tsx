type Props = {
  color?:string
  size?:number
  strokeWidth?:number
};

function CheveronDown({color,size=24,strokeWidth=1.5}: Props) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke={color?color:"#818894"}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default CheveronDown;
