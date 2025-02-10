import { useNavigate } from "react-router-dom"
import CirclePlus from "../../../assets/icons/circleplus"
import Button from "../../../Components/Button"

type Props = {}

const Receipt = ({ }: Props) => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Receipt</h1>
          <p className="text-[#818894] text-[12px] font-normal">
            Generate and manage invoices efficiently to ensure timely billing and maintain accurate financial records.
          </p>
        </div>
        <Button onClick={()=>navigate("/sales/receipt/new")}><CirclePlus/> New Receipt</Button>
      </div>
    </div>
  )
}

export default Receipt