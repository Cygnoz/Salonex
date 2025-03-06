
type Props = {
    size?:number;
    color?:string;
}

const ClockCalendar = ({size=18, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.25 8.375V6.5C24.25 5.83696 23.9866 5.20107 23.5178 4.73223C23.0489 4.26339 22.413 4 21.75 4H4.25C3.58696 4 2.95107 4.26339 2.48223 4.73223C2.01339 5.20107 1.75 5.83696 1.75 6.5V24C1.75 24.663 2.01339 25.2989 2.48223 25.7678C2.95107 26.2366 3.58696 26.5 4.25 26.5H8.625M18 1.5V6.5M8 1.5V6.5M1.75 11.5H8M19.875 20.875L18 19.375V16.5M25.5 19C25.5 23.1421 22.1421 26.5 18 26.5C13.8579 26.5 10.5 23.1421 10.5 19C10.5 14.8579 13.8579 11.5 18 11.5C22.1421 11.5 25.5 14.8579 25.5 19Z" 
stroke={color?color:"#818894"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ClockCalendar