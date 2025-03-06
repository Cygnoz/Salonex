
type Props = {
    size?:number;
    color?:string;
}

const ShowerHead = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66797 2.66675L4.33464 4.33341M9.00136 4.33348C8.3804 3.72493 7.54436 3.38603 6.67493 3.39042C5.80551 3.39481 4.97294 3.74214 4.35815 4.35693C3.74336 4.97172 3.39603 5.80428 3.39164 6.67371C3.38725 7.54314 3.72615 8.37918 4.3347 9.00014M10.0013 3.33341L3.33464 10.0001M9.33464 11.3334V11.3401M6.66797 10.6667V10.6734M8.66797 8.66675V8.67341M10.668 6.66675V6.67341M7.33464 13.3334V13.3401M11.3346 9.33341V9.34008M13.3346 7.33341V7.34008" 
stroke={color?color:"#2C3E50"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ShowerHead