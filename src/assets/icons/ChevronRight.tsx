type Props = { color?: string, className?: string }

function ChevronRight({ color, className }: Props) {
  return (
    <div>
      <svg width="14" className={className} height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.25 11L8.75 7.5L5.25 4" stroke={color ? color : "#71736B"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default ChevronRight