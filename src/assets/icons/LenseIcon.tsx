
type Props = {className:string}

function LenseIcon({className }: Props) {
  return (
    <div>
      <svg className={className} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 18.0002L13.9166 14.4168M15.8333 9.66667C15.8333 13.3486 12.8486 16.3333 9.16667 16.3333C5.48477 16.3333 2.5 13.3486 2.5 9.66667C2.5 5.98477 5.48477 3 9.16667 3C12.8486 3 15.8333 5.98477 15.8333 9.66667Z" stroke="#495160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default LenseIcon