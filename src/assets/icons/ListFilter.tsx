type Props = {color?:any, className?:any};


const ListFilter = ({color,className}:Props) => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M2.5 5H17.5M5.83333 10H14.1667M8.33333 15H11.6667"
          stroke={color?color:"#818894"}
       
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ListFilter;
