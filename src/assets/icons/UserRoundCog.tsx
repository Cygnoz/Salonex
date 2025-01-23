type Props = { color?: string ,size?:number,height?:number}

function UserRoundCog({color,size,height}: Props) {
  return (
    <>
    <svg width={size||"24"} height={height||"24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21.0002C2.00012 19.7412 2.29739 18.5 2.86766 17.3775C3.43792 16.255 4.26506 15.283 5.28182 14.5404C6.29858 13.7979 7.47624 13.3058 8.71904 13.1042C9.96183 12.9026 11.2347 12.9972 12.434 13.3802M19.5001 14.2998L19.1001 15.1998M16.9 20.7998L16.5 21.6998M21.6998 19.5001L20.7998 19.1001M15.1998 16.9L14.2998 16.5M21.6998 16.5L20.7998 16.9M15.1998 19.1001L14.2998 19.5001M19.5001 21.6998L19.1001 20.7998M16.9 15.1998L16.5 14.2998M15 8C15 10.7614 12.7614 13 10 13C7.23858 13 5 10.7614 5 8C5 5.23858 7.23858 3 10 3C12.7614 3 15 5.23858 15 8ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke={color||"white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </>
  )
}

export default UserRoundCog