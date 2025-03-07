type Props = { color: string ,height?:number,width?:number};




function CalendarCheck({color,height,width}: Props) {
  return (
    <div><svg width={width?width:"24"}
    height={height?height:"24"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33333 1.33301V3.99967M10.6667 1.33301V3.99967M2 6.66634H14M6 10.6663L7.33333 11.9997L10 9.33301M3.33333 2.66634H12.6667C13.403 2.66634 14 3.26329 14 3.99967V13.333C14 14.0694 13.403 14.6663 12.6667 14.6663H3.33333C2.59695 14.6663 2 14.0694 2 13.333V3.99967C2 3.26329 2.59695 2.66634 3.33333 2.66634Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default CalendarCheck