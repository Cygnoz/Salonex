import { useState } from "react"
import ArrowUpRightIcon from "../../assets/icons/ArrowUpRightIcon"
import CalenderCheck2 from "../../assets/icons/CalenderCheck2"
import CalenderClock from "../../assets/icons/CalenderClock"
import CalenderFold from "../../assets/icons/CalenderFold"
import CirclePlus from "../../assets/icons/circleplus"
import SendIcon from "../../assets/icons/SendIcon"
import Button from "../../Components/Button"
import DateInput from "../../Components/DateInput"
import SearchBarPos from "../../Components/SearchBarPos"
import { List } from "../../assets/icons/List"
import CalendarRange from "../../assets/icons/CalendarRange"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import ClockIcon from "../../assets/icons/ClockIcon"
import Circlecheck from "../../assets/icons/Circlecheck"
import Calender from "../../assets/icons/Calender"
import Trash from "../../assets/icons/Trash"
import Eye from "../../assets/icons/Eye"
import PencilLine from "../../assets/icons/PencilLine"
import ViewBooking from "./ViewBooking"
import Modal from "../../Components/modal/Modal"
import SentInviteModal from "./SentInviteModal"
import { useNavigate } from "react-router-dom"

type Props = {}

function BookingHome({ }: Props) {
  const cards = [
    {
      title: "Today’s Income",
      value: "₹1,00,000",
      percentage: "8.2%",
      increase: true,
      icon: <CalenderCheck2 />,
      textColor: "text-[#3FA55C]",
    },
    {
      title: "Today’s Booking",
      value: "656",
      percentage: null,
      increase: false,
      icon: <CalenderFold />,
      textColor: "text-[#2C3E50]",
    },
    {
      title: "New Customers (Last Month)",
      value: "55",
      percentage: "5.2%",
      increase: true,
      icon: <CalenderClock />,
      textColor: "text-[#3FA55C]",
    },
  ];

  const tabs = ["Booking", "Canceled Booking",];
  const homeTabs = [
    { id: "home", icon: List },
    { id: "calendar", icon: CalendarRange },
  ];
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState("Booking");
  const [activeHomeTab, setActiveHomeTab] = useState("home")

  const appointments = [
    {
      id: 1,
      day: "Wed",
      date: "24",
      customer: "Aman Rasheed",
      contact: "+9196774567879",
      appointmentDate: "5/30/14",
      time: "07:38 am",
      status: "Pending",
    },
    {
      id: 2,
      day: "Thu",
      date: "25",
      customer: "John Doe",
      contact: "+9196774567879",
      appointmentDate: "5/31/14",
      time: "10:00 am",
      status: "Completed",
    },
    {
      id: 3,
      day: "Wed",
      date: "24",
      customer: "Aman Rasheed",
      contact: "+9196774567879",
      appointmentDate: "5/30/14",
      time: "07:38 am",
      status: "Pending",
    },
  ];
  // const navigate = useNavigate();
 
  // const handleViewClick = (id:string) => {
  //   navigate(`customerview/${id}`);
  // };

  const [isModalOpen, setIsModalOpen]=useState({
    viewBooking:false,
    sentInvite:false,
  })

  const handleModalToggle=(viewBooking=false, sentInvite=false,)=>{
    setIsModalOpen((prev)=>({
      ...prev,
      viewBooking,
      sentInvite,
    }))
  }
  const navigate = useNavigate();

  const handleAddExpenseClick = () => {
    navigate("/booking/add-booking");
  };
  return (
    <div className="text-[#495160]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Booking</h1>
          <p className="mt-2">Add and Manage your Services, Products & Package</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={()=>handleModalToggle(false,true)} variant="secondary" className="text-xs font-semibold h-1">
            <SendIcon />
            Sent Invite  
            </Button>
          <Button
            onClick={handleAddExpenseClick}
            variant="primary"
            className="flex items-center"
            size="md"
          >
            <CirclePlus color="white" />
            <p className="text-md">New Booking</p>
          </Button>       </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white py-5 px-4 rounded-2xl flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="text-[#2C3E50] font-semibold text-xs">{card.title}</p>
              <p className="flex items-center text-[#2C3E50] font-bold text-lg mt-2">
                {card.value}
                {card.percentage && (
                  <span className={`ms-4 ${card.textColor} font-semibold text-base flex items-center gap-1`}>
                    {card.percentage} {card.increase && <ArrowUpRightIcon />}
                  </span>
                )}
              </p>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 flex justify-between">
        {/* Tabs Section */}
        <div className="flex bg-white py-2 px-3 gap-4 rounded-[46px] w-fit h-fit">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`rounded-3xl w-fit text-center p-2 cursor-pointer ${activeTab === tab
                ? "bg-[#D9E9FF] text-[#2C3E50] font-semibold"
                : "bg-[#F1F7FF] text-[#4C5259]"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              <p className="text-xs">{tab}</p>
            </div>
          ))}
        </div>
        <div className="w-[308px]">
          <SearchBarPos
            onSearchChange={setSearchValue}
            searchValue={searchValue}
            placeholder="Search phone or customers"
          />
        </div>
        <div className="w-fit">
          <DateInput className="bg-white border-0 h-[44px]" />
        </div>
        <div className="w-fit">
          <DateInput className="bg-white border-0 h-[44px]" />
        </div>
        <div className="w-fit">
          <DateInput className="bg-white border-0 h-[44px]" />
        </div>
        {/* <div className="flex py-1 gap-4 rounded-lg">
          {homeTabs.map((tab) => (
            <div
              key={tab.id}
              className={`rounded-lg w-[56px] h-10 items-center flex justify-center cursor-pointer ${activeHomeTab === tab.id
                  ? "bg-[#B5636A]"
                  : "bg-[#FFFFFF] text-[#A1585E]"
                }`}
              onClick={() => setActiveHomeTab(tab.id)}
            >
              {tab.icon}
            </div>
          ))}
        </div> */}
        <div className="flex py-1 gap-2 rounded-lg">
          {homeTabs.map((tab) => {
            const isActive = activeHomeTab === tab.id;
            const IconComponent = tab.icon;
            return (
              <div
                key={tab.id}
                className={`rounded-lg w-[56px] h-10 items-center flex justify-center cursor-pointer ${activeHomeTab === tab.id
                    ? "bg-[#B5636A]"
                    : "bg-[#FFFFFF]"
                  }`}
                onClick={() => setActiveHomeTab(tab.id)}
              >
                <IconComponent
                  color={isActive ? "#FAF1F1" : "#A1585E"}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="bg-[#FFFFFF] w-full h-20 rounded-xl py-3 px-4 mt-4 flex items-center">
        <div className="bg-[#F4F4F4] w-14 h-14 rounded-md py-2 px-1 text-center">
          <p className="text-[#6EA26D] text-xs font-semibold">Wed</p>
          <p className="text-[#6EA26D] text-2xl font-bold"> 24</p>
        </div>
        <div className="w-px h-11 mx-4 bg-gray-300"></div>
        <div className="flex items-center gap-14">
          
          <div className="flex items-center gap-2">
          <div className="bg-[#DFE2E5] rounded-full w-10 h-10 flex justify-center items-center">
            <p className="text-[#000000] text-sm font-bold">AR</p>
          </div>
            <div>
            <p className="text-[#6E7072] text-xs font-normal">Customer</p>
            <p className="text-[#37393A] text-xs font-semibold">Aman Rasheed</p>
            </div>
          </div>
          <div className="">
           <div className="flex gap-1">
           <PhoneIcon size={11} color="#6E7072"/>
           <p className="text-[#6E7072] text-xs font-normal">Contact</p>
           </div>
            <p className="text-[#37393A] text-xs font-semibold">color</p>
          </div>
          <div className="">
           <div className="flex gap-1">
           <Calender width={12} height={12} color="#6E7072"/>
           <p className="text-[#6E7072] text-xs font-normal">Date</p>
           </div>
            <p className="text-[#37393A] text-xs font-semibold">5/30/14</p>
          </div>
          <div className="">
           <div className="flex gap-1">
           <ClockIcon/>
           <p className="text-[#6E7072] text-xs font-normal">Time</p>
           </div>
            <p className="text-[#37393A] text-xs font-semibold">07:38 am</p>
          </div>
          <div className="">
           <div className="flex gap-1">
           <Circlecheck size={12} color="#6E7072"/>
           <p className="text-[#6E7072] text-xs font-normal">Status</p>
           </div>
           <div className="bg-[#F6C396] w-fit px-3 py-[2px] rounded-md">
           <p className="text-[#37393A] text-xs font-semibold">Pending</p>
           </div>
          </div>
        </div>

        <div className="flex justify-end ml-auto gap-3">
          <div className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2">
            <Trash size={14} color="#6E7072"/>
          </div>
          <div className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2">
            <PencilLine size={14} color="#6E7072"/>
          </div>
          <div className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2">
            <Eye size={14} color="#6E7072"/>
          </div>
        </div>
      </div> */}
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-[#FFFFFF] w-full h-20 rounded-xl py-3 px-4 flex items-center">
            {/* Date Section */}
            <div className="bg-[#F4F4F4] w-14 h-14 rounded-md py-2 px-1 text-center">
              <p className="text-[#6EA26D] text-xs font-semibold">{appointment.day}</p>
              <p className="text-[#6EA26D] text-2xl font-bold">{appointment.date}</p>
            </div>

            {/* Divider */}
            <div className="w-px h-11 mx-4 bg-gray-300"></div>

            {/* Details Section - Aligned in a single row */}
            <div className="grid grid-cols-6 w-full">
              {/* Customer */}
              <div className="flex items-center gap-2">
                <div className="bg-[#DFE2E5] rounded-full w-10 h-10 flex justify-center items-center">
                  <p className="text-[#000000] text-sm font-bold">AR</p>
                </div>
                <div>
                  <p className="text-[#6E7072] text-xs font-normal">Customer</p>
                  <p className="text-[#37393A] text-xs font-semibold">{appointment.customer}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  <PhoneIcon size={11} color="#6E7072" />
                  <p className="text-[#6E7072] text-xs font-normal">Contact</p>
                </div>
                <p className="text-[#37393A] text-xs font-semibold">{appointment.contact}</p>
              </div>

              {/* Date */}
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  <Calender width={12} height={12} color="#6E7072" />
                  <p className="text-[#6E7072] text-xs font-normal">Date</p>
                </div>
                <p className="text-[#37393A] text-xs font-semibold">{appointment.appointmentDate}</p>
              </div>

              {/* Time */}
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  <ClockIcon />
                  <p className="text-[#6E7072] text-xs font-normal">Time</p>
                </div>
                <p className="text-[#37393A] text-xs font-semibold">{appointment.time}</p>
              </div>

              {/* Status */}
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  <Circlecheck size={12} color="#6E7072" />
                  <p className="text-[#6E7072] text-xs font-normal">Status</p>
                </div>
                <div className={`w-fit px-3 py-[2px] rounded-md ${appointment.status === "Pending" ? "bg-[#F6C396]" : "bg-[#A8E6A3]"
                  }`}>
                  <p className="text-[#37393A] text-xs font-semibold">{appointment.status}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end ml-auto gap-3">
              <div className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2 cursor-pointer">
                <Trash size={14} color="#6E7072" />
              </div>
              <div className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2 cursor-pointer">
                <PencilLine size={14} color="#6E7072" />
              </div>
              <div onClick={()=>handleModalToggle(true,false)} className="bg-[#F2F2F2] w-8 h-8 rounded-xl p-2 cursor-pointer">
                <Eye size={14} color="#6E7072" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal className="" open={isModalOpen.viewBooking} onClose={()=>handleModalToggle()}>
        <ViewBooking  onClose={() => handleModalToggle()}/>
      </Modal>
      <Modal className="w-[35%]" open={isModalOpen.sentInvite} onClose={()=>handleModalToggle()}>
        <SentInviteModal  onClose={() => handleModalToggle()}/>
      </Modal>
      {/* <Modal className="" open={isModalOpen.newBooking} onClose={()=>handleModalToggle()}>
        <NewBookingForm  onClose={() => handleModalToggle()}/>
      </Modal> */}
      
    </div>
  )
}

export default BookingHome
