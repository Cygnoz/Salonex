
type Props = {
    size?:number;
    color?:string;
}

const CalenderCheck2 = ({size, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="15" fill="#F1D3A8"/>
<path d="M12.6667 9.16667V11.5M17.3333 9.16667V11.5M20.25 16.1667V11.5C20.25 11.1906 20.1271 10.8938 19.9083 10.675C19.6895 10.4563 19.3928 10.3333 19.0833 10.3333H10.9167C10.6072 10.3333 10.3105 10.4563 10.0917 10.675C9.87292 10.8938 9.75 11.1906 9.75 11.5V19.6667C9.75 19.9761 9.87292 20.2728 10.0917 20.4916C10.3105 20.7104 10.6072 20.8333 10.9167 20.8333H15.5833M9.75 13.8333H20.25M17.3333 19.6667L18.5 20.8333L20.8333 18.5" stroke={color?color:"#495160"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default CalenderCheck2