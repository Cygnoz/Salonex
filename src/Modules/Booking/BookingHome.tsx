import Button from "../../Components/Button"

type Props = {}

function BookingHome({}: Props) {
  return (
    <div className="text-[#495160]">
       <div className="flex justify-between">
       <div>
       <h1 className="text-lg font-bold text-[#2C3E50]">Booking</h1>
       <p className="mt-2">Add and Manage your Services, Products & Package</p>
       </div>
       <div>
       <Button variant="secondary" className="text-xs font-semibold h-1">Sent Invite  </Button>
       </div>
       </div>
     </div>
  )
}

export default BookingHome
