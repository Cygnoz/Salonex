type Props = { color?: string }

function ArrowUpRightIcon({ color }: Props) {
  return (
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83325 5.8335H14.1666M14.1666 5.8335V14.1668M14.1666 5.8335L5.83325 14.1668" stroke={color ? color : "#3FA55C"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default ArrowUpRightIcon