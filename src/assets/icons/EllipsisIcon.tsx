
type Props = {size?:string}

function EllipsisIcon({size }: Props) {
    return (
        <div>
            <svg width={size || "14"}
                height={size || "14"} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 10.25C9.41421 10.25 9.75 9.91421 9.75 9.5C9.75 9.08579 9.41421 8.75 9 8.75C8.58579 8.75 8.25 9.08579 8.25 9.5C8.25 9.91421 8.58579 10.25 9 10.25Z" stroke="#6E7072" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 5C9.41421 5 9.75 4.66421 9.75 4.25C9.75 3.83579 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.83579 8.25 4.25C8.25 4.66421 8.58579 5 9 5Z" stroke="#6E7072" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 15.5C9.41421 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.41421 14 9 14C8.58579 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.58579 15.5 9 15.5Z" stroke="#6E7072" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

export default EllipsisIcon