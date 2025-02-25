
type Props = {
    size?:number;
    color?:string
}

const CopyIcon = ({size=20, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33268 12.8333C2.41602 12.8333 1.66602 12.0833 1.66602 11.1667V2.83332C1.66602 1.91666 2.41602 1.16666 3.33268 1.16666H11.666C12.5827 1.16666 13.3327 1.91666 13.3327 2.83332M8.33268 6.16666H16.666C17.5865 6.16666 18.3327 6.91285 18.3327 7.83332V16.1667C18.3327 17.0871 17.5865 17.8333 16.666 17.8333H8.33268C7.41221 17.8333 6.66602 17.0871 6.66602 16.1667V7.83332C6.66602 6.91285 7.41221 6.16666 8.33268 6.16666Z" 
stroke={color?color:"#6E7072"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CopyIcon