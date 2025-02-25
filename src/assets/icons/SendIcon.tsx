
type Props = {
    size?:number;
    color?:string;
}

const SendIcon = ({size=17, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1654 1.33334L10.4987 14.6667L7.83203 8.66667M15.1654 1.33334L1.83203 6L7.83203 8.66667M15.1654 1.33334L7.83203 8.66667" stroke={color?color:"#C96E76"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default SendIcon