type Props = { color?: string, height?: string, width?: string, stroke?: string, className?: string }

function ChevronLeft({ color, height, width, stroke, className }: Props) {
  return (
    <div>
      <svg className={className} width={width ? width : "14"} height={height ? height : "15"} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 11L5.25 7.5L8.75 4" stroke={color ? color : "#71736B"} stroke-width={stroke ? stroke : "1.3"} stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default ChevronLeft