import {  useNavigate } from "react-router-dom"
import CirclePlus from "../../../assets/icons/circleplus"
import Button from "../../../Components/Button"
import { useState } from "react"
import Table from "../../../Components/Table/Table"


type Props = {}

const CreditNote = ({}: Props) => {
   const navigate = useNavigate();
  
    const [columns] = useState([
      { id: "billNumber", label: "Credit Note", visible: true },
      { id: "supplierDisplayName", label: "Customer Name", visible: true },
      { id: "bill", label: "Date", visible: true },
      { id: "paymentMode", label: "Order Number", visible: true },
      { id: "grandTotal", label: "Balance", visible: true },
    ]);
  
    const [data] = useState([
      {
        billNumber: "PMT12345",
        supplierDisplayName: "Supplier A",
        bill: "BILL67890",
        paymentMode: "Bank Transfer",
        grandTotal: "5000",
        amount: "1000",
      },
      {
        billNumber: "PMT23456",
        supplierDisplayName: "Supplier B",
        bill: "BILL78901",
        paymentMode: "Credit Card",
        grandTotal: "8000",
        amount: "1500",
      },
      {
        billNumber: "PMT34567",
        supplierDisplayName: "Supplier C",
        bill: "BILL89012",
        paymentMode: "Cash",
        grandTotal: "3000",
        amount: "500",
      },
    ]);
  
    const handleRowClick = () => {
      navigate(`/sales/credit-note/view/id`);
    };
  
  return (
    <div>
        <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Credit Note</h1>
          <p className="text-[#818894] text-[12px] font-normal">
          Document issuing credit to customer account. Refunds or adjust previous transaction.
          </p>
        </div>
        <Button onClick={() => navigate("/sales/credit-note/new")}><CirclePlus /> New Credit Note</Button>
      </div>
      <br />
      <Table
          columns={columns}
          data={data}
          onRowClick={handleRowClick}
          searchPlaceholder={"Search payment"}
          searchableFields={["billNumber", "supplierDisplayName"]}
        />
    </div>
  )
}

export default CreditNote