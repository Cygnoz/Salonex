import { useState } from 'react'
import Table from '../../../../Components/Table/Table';

type Props = {}

function PaymentHistory({ }: Props) {

    const [paymentColumns] = useState([
        { id: "date", label: "Date", visible: true },
        { id: "amount", label: "Amount", visible: true },
        { id: "remark", label: "Remark", visible: true },
    ]);

    const paymentHistory = [
        {
            date: "24 Dec 2024",
            amount: "500.00",
            remark: "0.00",
        },
        {
            date: "24 Dec 2024",
            amount: "500.00",
            remark: "0.00",
        },

    ];
    return (
        <div>
            <Table
                columns={paymentColumns}
                data={paymentHistory} // Ensure this is not empty
                searchPlaceholder={"Search History"}
                searchableFields={["date"]} // Make sure valid fields are used
                onRowClick={() => alert("Row clicked")}

            />

        </div>
    )
}

export default PaymentHistory