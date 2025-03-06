
type Props = {
    size?:number;
    color?:string;
}

const ScissorsIcon = ({size=12, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.06006 3.06006L5.00006 5.00006M9.00006 1L3.06006 6.94M6.40002 6.3999L9.00002 8.9999M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z" 
stroke={color?color:"#4F5152"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ScissorsIcon