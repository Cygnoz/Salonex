
type Props = {
    size?:number;
    color?:string;
}

export default function Scissors({ size=18, color}: Props) {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.09009 6.3938L9.00009 9.3038M15.0001 3.30371L6.09009 12.2137M11.1 11.4036L15 15.3036M6.75 4.80371C6.75 6.04635 5.74264 7.05371 4.5 7.05371C3.25736 7.05371 2.25 6.04635 2.25 4.80371C2.25 3.56107 3.25736 2.55371 4.5 2.55371C5.74264 2.55371 6.75 3.56107 6.75 4.80371ZM6.75 13.8037C6.75 15.0464 5.74264 16.0537 4.5 16.0537C3.25736 16.0537 2.25 15.0464 2.25 13.8037C2.25 12.5611 3.25736 11.5537 4.5 11.5537C5.74264 11.5537 6.75 12.5611 6.75 13.8037Z" 
                stroke={color?color:"#EBEBEB"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}