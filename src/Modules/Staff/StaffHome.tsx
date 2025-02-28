import { Link, useNavigate } from "react-router-dom"
import CirclePlus from "../../assets/icons/circleplus"
import StaffIcon from "../../assets/icons/StaffIcon"
import Button from "../../Components/Button"
import ArrowUpRight from "../../assets/icons/ArrowUpRight"
import Table from "../../Components/Table/Table"
import { useState } from "react"

type Props = {}

function StaffHome({ }: Props) {

  const StaffDetails = [
    {
      title: "Total Staff",
      number: "26",
    },
    {
      title: "Existing Staff",
      number: "26",
      percentage: "5.8%",
    },
    {
      title: "Removed Staff",
      number: "26",
      percentage: "5.8%",
    },
  ]

  const [columns] = useState([
    { id: "worker_id", label: "Worker ID", visible: true },  // Fix label
    { id: "staff_name", label: "Staff Name", visible: true },
    { id: "contact", label: "Contact", visible: true },
    { id: "doj", label: "DOJ", visible: true },
    { id: "salary", label: "Salary", visible: true },
    { id: "status", label: "Status", visible: true },  // Fix ID to lowercase
  ]);

  const dummyData = [
    {
      worker_id: "AU098768",
      staff_name: "Aman Rasheed",
      contact: "9867566767",
      doj: "06/03/98",
      salary: "0.00",
      status: "Active", // Ensure lowercase key
    },
    {
      worker_id: "AU098768",
      staff_name: "Sainul Aabid",
      contact: "9857666767",
      doj: "09/04/98",
      salary: "0.00",
      status: "Inactive", // Ensure lowercase key
    },
  ];
const navigate = useNavigate();
  const handleRowClick = () => {
    navigate("/staffs/viewstaff")
  };
  // Fix case sensitivity in renderColumnContent
  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "status") {  // Ensure lowercase check
      return (
        <div className="flex justify-center items-center">
          <div
            className={`${item.status === "Active" ? "bg-[#52C595] text-[#FFFFFF]" : "bg-[#D4795D] text-[#FFFFFF]"
              } text-[13px] rounded-md text-center items-center text-textColor h-[25px] px-2 max-w-fit gap-2 py-2 flex justify-center`}
          >
            {item.status}
          </div>
        </div>
      );
    }
    return item[colId as keyof typeof item] ?? "N/A"; // Ensure fallback value
  };

  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Staff</h1>
          <p className="text-[#818894] text-[12px] font-normal">
            Add and manage employee details, roles, schedules, and assigned services
          </p>
        </div>
        <div className="flex space-x-4">
          <Link to="/staffs/addstaff">
            <Button >
              <CirclePlus />
              <p> Add Staff</p>
            </Button>
          </Link>
          <Link to="/staffs/workercommission">
            <Button >
              <CirclePlus />
              <p> Worker Commission</p>
            </Button>
          </Link>
        </div>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {
          StaffDetails.map((staff, index) => (
            <div key={index} className="flex justify-between bg-white p-4 mt-4 rounded-xl shadow-card">
              <div>
                <h1 className="text-[#2C3E50] font-semibold text-[12px]">{staff.title}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-[#2C3E50] text-[18px] font-bold">{staff.number}</p>
                  {
                    staff.percentage &&
                    <div className="flex items-center space-x-2">
                      <p className="text-[#3FA55C] text-[16px] font-semibold">{staff.percentage}</p>
                      <ArrowUpRight color="#3FA55C" />
                    </div>
                  }
                </div>
              </div>
              <div>
                <StaffIcon />
              </div>
            </div>
          ))
        }
      </div>

      {/* Table Section */}
      <div className="my-5">
        <Table
          columns={columns}
          data={dummyData} // Ensure this is not empty
          onRowClick={handleRowClick}
          renderColumnContent={renderColumnContent}
          searchPlaceholder={"Search Staff"}
          searchableFields={["worker_id", "staff_name"]} // Make sure valid fields are used
        />

      </div>

    </div>
  )
}

export default StaffHome