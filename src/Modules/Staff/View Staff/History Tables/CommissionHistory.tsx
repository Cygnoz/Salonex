import { useState } from "react";
import Table from "../../../../Components/Table/Table";

type Props = {}

function CommissionHistory({ }: Props) {
    const [columns] = useState([
        { id: "orderNo", label: "Order No", visible: true },
        { id: "date", label: "Date", visible: true },
        { id: "serviceName", label: "Service Name", visible: true },
        { id: "price", label: "Price", visible: true },
        { id: "amount", label: "Amount", visible: true },
        { id: "commission", label: "Commission", visible: true },
        { id: "remark", label: "Remark", visible: true }, // Only for payment history
    ]);
    const commissionHistory = [
        {
            orderNo: "2",
            date: "24/2/2",
            serviceName: "Hair ",
            price: "500.00",
            amount: "500.00",
            commission: "0.00",
        },
        {
            orderNo: "5",
            date: "2/2/2",
            serviceName: "Hair ",
            price: "500.00",
            amount: "500.00",
            commission: "0.00",
        },
      
    ];
    return (


        <div>

            <Table
                columns={columns}
                data={commissionHistory} // Ensure this is not empty
                searchPlaceholder={"Search History"}
                searchableFields={["orderNo"]} // Make sure valid fields are used
                onRowClick={() => alert("Row clicked")}
            />
        </div>
    )
}

export default CommissionHistory