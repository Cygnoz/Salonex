function CustomerStatusHistory() {
    const historyData = [
      {
        icon: "🛒",
        title: "Sales Order Updated",
        date: "25 April, 2024",
        time: "12:21 AM",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        icon: "🛒",
        title: "Sales Order Added",
        date: "25 April, 2024",
        time: "12:21 AM",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        icon: "🔑",
        title: "Contact Added",
        date: "25 April, 2024",
        time: "12:21 AM",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        icon: "🔑",
        title: "Contact Added",
        date: "25 April, 2024",
        time: "12:21 AM",
        description: "Lorem dolo hun ipsum dolo",
      },
    ];
  
    return (
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-gray-800 mb-6 text-xl font-bold">
          Recent Customer Activity
        </h3>
        <div className="grid grid-cols-[100px_1px_auto] gap-4 relative">
          {/* First Column: Icons and Date/Time */}
          <div className="flex flex-col items-center space-y-8">
            {historyData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full text-lg">
                  {item.icon}
                </div>
                {/* Date and Time */}
                <p className="mt-2 text-sm text-gray-600 font-medium text-center">
                  {item.date} <br /> {item.time}
                </p>
              </div>
            ))}
          </div>
  
          {/* Second Column: Vertical Line */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-gray-300"></div>
          </div>
  
          {/* Third Column: Event Details */}
          <div className="flex flex-col space-y-8">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-2"
              >
                <h4 className="text-gray-800 text-base font-bold">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default CustomerStatusHistory;
  