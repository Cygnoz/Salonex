
type Props = {
    size?:number;
    color?:string;
}

const Circlecheck = ({size=12, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6.5L5.5 7.5L7.5 5.5M11 6.5C11 9.26142 8.76142 11.5 6 11.5C3.23858 11.5 1 9.26142 1 6.5C1 3.73858 3.23858 1.5 6 1.5C8.76142 1.5 11 3.73858 11 6.5Z" 
stroke={color?color:"#6E7072"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Circlecheck