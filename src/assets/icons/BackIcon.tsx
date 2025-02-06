import ChevronLeft from "./ChevronLeft";

type Props = {} ;

function BackIcon({}: Props) {
  return (
    <div
    style={{ borderRadius: "50%" }}
    className="w-11 h-11 flex items-center justify-center bg-white cursor-pointer"
  >
    <ChevronLeft color="#495160" height="20" width="20" stroke="1.6"/>
  </div>
  )
}

export default BackIcon