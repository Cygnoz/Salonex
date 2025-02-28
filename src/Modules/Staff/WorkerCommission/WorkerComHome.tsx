import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import { useState } from "react"
import Table from "../../../Components/Table/Table"
import AddComProfileModal from "./AddComProfileModal"

type Props = {}

function WorkerComHome({ }: Props) {
    const [activeTab, setActiveTab] = useState("monthly");
    
    const [Monthlycolumns] = useState([
        { id: "name", label: "Name", visible: true },  // Fix label
        { id: "value", label: "Value(%)", visible: true },
        { id: "thresholdSale", label: "Threshold Amount (sale)", visible: true },
        { id: "thresholdService", label: "Threshold Amount (service)", visible: true },
        { id: "date", label: "Date", visible: true },
    ]);
    const [itemcolumns] = useState([
        { id: "name", label: "Name", visible: true },  // Fix label
        { id: "value", label: "Value(%)", visible: true },
        { id: "thresholdSale", label: "Threshold Amount (sale)", visible: true },
        { id: "date", label: "Date", visible: true },
    ]);

    const monthlydata = [
        {
            name: "Aman Rasheed",
            value: "456",
            thresholdSale: "400",
            thresholdService: "400",
            date: "12-03-2024"
        },
        {
            name: "Sainul Aabid",
            value: "364",
            thresholdSale: "500",
            thresholdService: "500",
            date: "12-03-2024"
        },
    ]

    const itemdata = [
        {
            name: "Aman Rasheed",
            value: "456",
            thresholdSale: "400",
            date: "12-03-2024"
        },
        {
            name: "Sainul Aabid",
            value: "364",
            thresholdSale: "500",
            date: "12-03-2024"
        },
    ]
    const handleDelete = () => {
        alert("Delete clicked")
    };
    return (
        <div>
            <div className="flex justify-between ">
                <div className="flex items-center gap-4 mb-4">
                    <Link to={"/staffs"}>
                        <BackIcon />
                    </Link>
                    <h1 className="text-lg font-bold text-[#2C3E50]">Work Commission Profile</h1>
                </div>
                <div className="flex space-x-4">
                    <AddComProfileModal />
                </div>
            </div>

            <div className="grid grid-cols-3">
                <div
                    className={`p-3 items-center text-center rounded-md cursor-pointer ${activeTab === "monthly" ? "bg-[#FFE6EE]" : "bg-[#FFF7F9]"
                        }`}
                    onClick={() => setActiveTab("monthly")}
                >
                    <p className="text-[12px] text-[#0B1320] font-semibold">
                        Monthly Wise Commission
                    </p>
                </div>
                <div
                    className={`p-3 items-center text-center rounded-md cursor-pointer ${activeTab === "item" ? "bg-[#FFE6EE]" : "bg-[#FFF7F9]"
                        }`}
                    onClick={() => setActiveTab("item")}
                >
                    <p className="text-[12px] text-[#0B1320] font-semibold">
                        Item Wise Commission
                    </p>
                </div>
                <div
                    className={`p-3 items-center text-center rounded-md cursor-pointer ${activeTab === "daily" ? "bg-[#FFE6EE]" : "bg-[#FFF7F9]"
                        }`}
                    onClick={() => setActiveTab("daily")}
                >
                    <p className="text-[12px] text-[#0B1320] font-semibold">
                        Daily Wise Commission
                    </p>
                </div>
            </div>

            {
                activeTab === "monthly" && (
                    <div className="mt-2">
                        <Table
                            columns={Monthlycolumns}
                            data={monthlydata} // Ensure this is not empty
                            searchPlaceholder={"Search Account"}
                            searchableFields={["name"]} // Make sure valid fields are used
                            onDelete={handleDelete}

                        />
                    </div>
                )
            }
            {
                activeTab === "item" && (
                    <div className="mt-2">
                        <Table
                            columns={itemcolumns}
                            data={itemdata} // Ensure this is not empty
                            searchPlaceholder={"Search Account"}
                            searchableFields={["name"]} // Make sure valid fields are used
                            onDelete={handleDelete}
                        />
                    </div>
                )
            }

        </div>
    )
}

export default WorkerComHome