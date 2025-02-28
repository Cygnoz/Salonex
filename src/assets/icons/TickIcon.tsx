
type Props = {
    size?:number;
    color?:string;
}

const TickIcon = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke={color?color:"#2C3E50"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default TickIcon