import { useNavigate } from "react-router-dom"
import CirclePlus from "../../../assets/icons/circleplus"
import Button from "../../../Components/Button"
import Table from "../../../Components/Table/Table"
import { useState } from "react"
import DotIcon from "../../../assets/icons/DotIcon"

type Props = {}

const Inovice = ({ }: Props) => {
  const [columns] = useState([
    { id: "billDate", label: "Date", visible: true },
    { id: "billNumber", label: "Invoice#", visible: true },
    { id: "reference", label: "Reference", visible: true },
    { id: "supplierDisplayName", label: "Customer Name", visible: true },
    { id: "grandTotal", label: "Amount", visible: true },
    { id: "paidStatus", label: "Status", visible: true },
  ]);

  const dummyData = [
    {
      billNumber: "B001",
      billDate: "2025-01-01",
      supplierDisplayName: "Supplier A",
      grandTotal: "$1500",
      reference:"lorem",
      paidStatus: "Completed",
    },
    {
      billNumber: "B002",
      billDate: "2025-01-05",
      supplierDisplayName: "Supplier B",
      grandTotal: "$2000",
      reference:"lorem",
      paidStatus: "Pending",
    },
    {
      billNumber: "B003",
      billDate: "2025-01-10",
      supplierDisplayName: "Supplier C",
      grandTotal: "$1800",
      reference:"lorem",
      paidStatus: "Overdue",
    },
    {
      billNumber: "B004",
      billDate: "2025-01-12",
      supplierDisplayName: "Supplier D",
      grandTotal: "$1200",
      reference:"lorem",
      paidStatus: "Pending",
    },
  ];
  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "paidStatus") {
      return (
        <div className="flex justify-center items-center">
          <div
            className={`${item.paidStatus === "Pending"
                ? "bg-[#FFF6EC] text-[#B47800]"
                : item.paidStatus === "Completed"
                  ? "bg-[#DBF8EB] text-[#178B53]"
                  : "bg-[#FF3B301A] text-[#FF3B30]"
              } text-[13px] rounded-lg text-center items-center h-[18px] px-2 max-w-fit gap-2 py-2 flex justify-center`}
          >
            <DotIcon
              color={
                item.paidStatus === "Pending"
                  ? "#B47800"
                  : item.paidStatus === "Completed"
                    ? "#178B53"
                    : "#FF3B30"
              }
            />{" "}
            {item.paidStatus}
          </div>
        </div>
      );
    }

    return item[colId as keyof typeof item];
  };
  const handleRowClick = () => {
    navigate(`/sales/invoice/view/id`);
  };


  const navigate = useNavigate()

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Inovice</h1>
          <p className="text-[#818894] text-[12px] font-normal">
            Generate and manage invoices efficiently to ensure timely billing and maintain accurate financial records.
          </p>
        </div>
        <Button onClick={() => navigate("/sales/invoice/new")}><CirclePlus /> New Invoice</Button>
      </div>
      <div className="mt-5">
        <Table
          columns={columns}
          data={dummyData}
          onRowClick={handleRowClick}
          renderColumnContent={renderColumnContent}
          searchPlaceholder={"Search bill"}
          searchableFields={["billNumber", "supplierDisplayName"]}
        />
      </div>
    </div>
  )
}

export default Inovice