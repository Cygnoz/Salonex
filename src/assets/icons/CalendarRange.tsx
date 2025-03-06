
type Props = {
    color?:any
}

const CalendarRange = ({color}: Props) => {
  return (
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 1.16667V3.5M0.75 5.83333H11.25M3.66667 1.16667V3.5M8.91667 8.16667H5.41667M6.58333 10.5H3.08333M3.08333 8.16667H3.08917M8.91667 10.5H8.9225M1.91667 2.33333H10.0833C10.7277 2.33333 11.25 2.85567 11.25 3.5V11.6667C11.25 12.311 10.7277 12.8333 10.0833 12.8333H1.91667C1.27233 12.8333 0.75 12.311 0.75 11.6667V3.5C0.75 2.85567 1.27233 2.33333 1.91667 2.33333Z" 
stroke={color?color:"#A1585E"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CalendarRange