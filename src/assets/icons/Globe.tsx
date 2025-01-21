
type Props = {size?: number}

function Globe({ size}: Props) {
    return (
        <div>
            <svg width={size||"18"} height={size||"18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3355_17500)">
                    <path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5M16.5 9H1.5M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9M9 16.5C7.07418 14.4779 6 11.7924 6 9C6 6.20756 7.07418 3.52212 9 1.5M9 16.5C10.9258 14.4779 12 11.7924 12 9C12 6.20756 10.9258 3.52212 9 1.5M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5" stroke="#818894" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_3355_17500">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}

export default Globe