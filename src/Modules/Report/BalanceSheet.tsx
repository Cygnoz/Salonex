import { Link } from "react-router-dom"
import DateInput from "../../Components/DateInput"
import BackIcon from "../../assets/icons/BackIcon"
import SearchBar from "../../Components/SearchBar"
import { useState } from "react"

type Props = {}

function BalanceSheet({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const BalanceTable = [
        {
            liability: [
                { label: "Capital Account", value: "54" },
                { label: "Loans (Liability)", value: "687" },
                { label: "Current Liability", value: "465" },
                { label: "#NV-1006", value: "444100" }
            ],
            asset: [
                { label: "Fixed Asset", value: "54" },
                { label: "Current Asset", value: "687" },
                { label: "Supense A/C", value: "465" },
                { label: "Profit & Loss A/C", value: "444100" }
            ],

        }
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 ">
                    <Link to={"/report"}>
                        <BackIcon />
                    </Link>
                    <h1 className="text-lg mt-2 font-bold text-[#2C3E50]">
                        Balance Sheet
                    </h1>
                </div>
                <div className="flex gap-2">
                    <DateInput
                        placeholder="Select from Date"
                        className="bg-white"
                    />
                    <DateInput
                        placeholder="Select to Date"
                        className="bg-white"
                    />
                </div>
            </div>

            <div className="bg-[#FFFFFF] p-2 rounded-xl mt-4">

                <div className="flex gap-5 mx-3">
                    <div className="w-[80%]">
                        <SearchBar
                            placeholder="Search Report"
                            searchValue={searchValue}
                            onSearchChange={(value) => {
                                setSearchValue(value);
                            }}
                        />
                    </div>
                    <div className="ms-8">
                        <h1 className="text-[#303F58] text-[16px] font-bold">
                            Company Name
                        </h1>
                        <p className="text-[#4B5C79] text-[12px] font-normal">
                            01/07/2024 To 30/09/2024
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 p-3">

                    <div>
                        <h1 className=" bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                            Liability
                        </h1>

                        <table className="w-full my-3">
                            <thead>
                                <tr>
                                    <th className="py-2">
                                        Account
                                    </th>
                                    <th className=" ">
                                        Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    BalanceTable.map((tableData) =>
                                        tableData.liability.map((data) => (
                                            <tr className="px-5 border-y border-tableBorder text-[#4B5C79] text-[12px]">
                                                <td className="p-3 ">{data.label}</td>
                                                <td className=" ">₹{data.value}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                    <div>
                        <h1 className=" bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                            Asset
                        </h1>
                        <table className="w-full my-3">
                            <thead>
                                <tr>
                                    <th className="py-2">
                                        Account
                                    </th>
                                    <th className=" ">
                                        Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    BalanceTable.map((tableData) =>
                                        tableData.asset.map((data) => (
                                            <tr className="px-5 border-y border-tableBorder text-[#4B5C79] text-[12px]">
                                                <td className="p-3 ">{data.label}</td>
                                                <td className=" ">₹{data.value}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BalanceSheet