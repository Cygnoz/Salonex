import ClockCalendar from "../../assets/icons/ClockCalendar"
import calendarProfile1 from '../../assets/images/Ellipse 45.png'
import calendarProfile2 from '../../assets/images/Ellipse 46.png'


type Props = {}

const BookingCalendarPage = ({}: Props) => {
    // const days = ["Monday 12", "Tuesday 13", "Wednesday 14", "Thursday 15", "Friday 16", "Saturday 17", "Sunday 18"];
    // const timeSlots = ["09:00", "10:00", "11:00", "13:00", "15:00", "17:00"];
    // const events = [
    //   { day: 0, time: "09:00", duration: "10:00", label: "Dandruff treatment", color: "bg-red-200" },
    //   { day: 1, time: "09:00", duration: "10:00", label: "Dandruff treatment", color: "bg-gray-200" },
    //   { day: 3, time: "09:00", duration: "10:00", label: "Dandruff treatment", color: "bg-pink-200" },
    //   { day: 5, time: "11:00", duration: "13:00", label: "Dandruff treatment", color: "bg-red-300" },
    //   { day: 6, time: "11:00", duration: "13:00", label: "Dandruff treatment", color: "bg-green-200" },
    //   { day: 2, time: "13:00", duration: "14:00", label: "Dandruff treatment", color: "bg-purple-200" },
    //   { day: 4, time: "13:00", duration: "14:00", label: "Dandruff treatment", color: "bg-blue-200" },
    // ];


  return (
    <div>
    
      
      {/* Calendar */}
      {/* <div className="w-5/6 p-5">
        <div className="grid grid-cols-8 border-b pb-2">
          <div className=""></div>
          {days.map((day, index) => (
            <div key={index} className="text-center font-bold">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-2 mt-4">
          <div className="flex flex-col space-y-4">
            {timeSlots.map((time, index) => (
              <div key={index} className="text-gray-500">{time}</div>
            ))}
          </div>
          {days.map((_, dayIndex) => (
            <div key={dayIndex} className="border p-2 relative h-96">
              {events.filter(event => event.day === dayIndex).map((event, index) => (
                <div
                  key={index}
                  className={`absolute w-full p-2 text-sm rounded-md ${event.color}`}
                  style={{ top: `${timeSlots.indexOf(event.time) * 20}px`, height: "50px" }}
                >
                  {event.time} - {event.duration}
                  <br />
                  {event.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}



        <div className="grid grid-cols-12">
       
       <div className="col-span-1">
     <div className="bg-[#F3E6E6] py-1">
     <div className="flex justify-center items-center mt-2">
        {/* <p className="ms-4 mt-3 font-semibold text-base">GMT+7</p> */}
        <ClockCalendar size={28} color="#818894"/>
      </div>
      <div className="mt-3 ms-2">
        <hr />
      </div>
     </div>
     <div className="bg-[#FFFAFA] h-[560px] max-h-full pt-5 pb-4">
  <div className="mt-20">
    <p className="ms-4 -mt-10 font-medium text-sm">09AM</p>
  </div>
  <div className="mt-20">
    <p className="ms-4 mt-5 font-medium text-sm">10AM</p>
  </div>
  <div className="mt-24">
    <p className="ms-4 mt-5 font-medium text-sm">11AM</p>
  </div>
  <div className="mt-20">
    <p className="ms-4 mt-14 font-medium text-sm">12PM</p>
  </div>
  <div className="mt-20">
    <p className="ms-4 mt-8 font-medium text-sm">01PM</p>
  </div>
</div>


       </div>
       <div className="col-span-11">
       <div className=" bg-gray-100 flex items-center justify-center ">
      <div className="w-full  bg-white  rounded-lg">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b border-gray-200 bg-[#F3E6E6] py-1">
          <div className="text-center py-3 font-semibold text-gray-600">Monday 12</div>
          <div className="text-center py-3 font-semibold text-gray-600">Tuesday 13</div>
          <div className="text-center py-3 font-semibold text-gray-600">Wednesday 14</div>
          <div className="text-center py-3 font-semibold text-gray-600">Thursday 15</div>
          <div className="text-center py-3 font-semibold text-gray-600">Friday 16</div>
          <div className="text-center py-3 font-semibold text-gray-600">Saturday 17</div>
          <div className="text-center py-3 font-semibold text-gray-600">Sunday 18</div>
        </div>
    
       {/* Calendar Body */}
          <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200">
         
          </div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

        
         {/* Calendar Body */}
         <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            {/* <div className="absolute top-2 left-2 right-2 bg-green-200 p-2 rounded-md text-sm text-gray-800">
              <div className="font-bold">Meeting Scheduled</div>
              <div className="text-xs">09:00 AM - 10:00 AM</div>
            </div> */}
            <div className="bg-[#F5EEEC] rounded-md p-2 absolute top-2 left-2 right-2 bottom-2">
              <div className="flex justify-center items-center gap-3 mt-2">
                <div className="bg-[#F29373] w-12 h-8 rounded-md flex justify-center items-center">
                  <p className="text-center text-xs text-[#FFFFFF] font-extrabold">09.00</p>
                </div>
                <div className="flex gap-2">
                  <img className="w-8 h-8 rounded-md" src={calendarProfile1} alt="" />
                  <img className="w-8 h-8 rounded-md" src={calendarProfile2} alt="" />
                </div>
              </div>
<p className="text-[#4D5E80] text-xs text-center font-semibold py-3">Dandruff Treatment</p>
            </div>
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

              {/* Calendar Body */}
              <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            {/* <div className="absolute top-2 left-2 right-2 bg-green-200 p-2 rounded-md text-sm text-gray-800">
              <div className="font-bold">Meeting Scheduled</div>
              <div className="text-xs">09:00 AM - 10:00 AM</div>
            </div> */}
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200">
          
          </div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

              {/* Calendar Body */}
              <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200">
        
          </div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
          
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

        <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200">
        
          </div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
          
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>





      </div>
    </div>
  
        
       </div>


      </div>
     


    </div>
  )
}

export default BookingCalendarPage