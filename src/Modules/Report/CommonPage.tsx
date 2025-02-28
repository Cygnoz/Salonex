import { Link } from "react-router-dom"
import DateInput from "../../Components/DateInput"
import BackIcon from "../../assets/icons/BackIcon"
import SearchBar from "../../Components/SearchBar"
import { useState } from "react"

type Props = { page: string }

function CommonPage({ page }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");

    const ProfitTable = [
        {
            lossData: [
                { label: "Gross Loss", value: "54" },
                { label: "Indirect Expense", value: "687" },
                { label: "Net Profit", value: "465" },
                { label: "Total", value: "444100" }
            ],
            profitData: [
                { label: "Gross Profit b/f", value: "54" },
                { label: "Indirect Income", value: "687" },
                { label: "Net Loss", value: "465" },
                { label: "Total", value: "444100" }
            ],
            
        }
    ];



    const TradingTable = [
        {
            debitData: [
                { label: "Opening Stock", value: "54" },
                { label: "Purchase Account", value: "687" },
                { label: "Direct Expense", value: "465" },
                { label: "Gross Profit", value: "444100" },
                { label: "Indirect Expense", value: "687" },
                { label: "Net Profit", value: "465" },
                { label: "Total", value: "444100" }

            ],
            creditData: [
                { label: "Sales Account", value: "687" },
                { label: "Closing Stock", value: "465" },
                { label: "Gross Profit", value: "444100" },
                { label: "Total", value: "444100" }
            ]
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
                        {
                            page === "profitandloss" ? "Profit and Loss" :
                                page === "trading" ? "Trading Account" : ""
                        }
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

                {
                    page === "trading" && (
                        <div className="flex justify-between px-5 mt-1">
                            <h1 className="text-[#303F58] text-[14px] font-medium">
                                Debit
                            </h1>
                            <h1 className="text-[#303F58] text-[14px] font-medium">
                                Credit
                            </h1>
                        </div>
                    )
                }
                <div className="grid grid-cols-2 gap-8 p-3">
                    <div className="">

                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="pe-3">
                                        <h1 className=" bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                                            Particulars
                                        </h1>
                                    </th>
                                    <th className=" ">
                                        <h1 className="bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                                            Amount
                                        </h1>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {(page === "profitandloss" ? ProfitTable[0]?.lossData :
                                    page === "trading" ? TradingTable[0]?.debitData :
                                        [])?.map((data, index) => (
                                            <tr key={index} className="px-5 border-b border-tableBorder text-[#4B5C79] text-[12px]">
                                                <td className="p-3">{data.label}</td>
                                                <td className="ps-5">{data.value}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="pe-3">
                                        <h1 className=" bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                                            Profit
                                        </h1>
                                    </th>
                                    <th className=" ">
                                        <h1 className="bg-[#F7ECD9] p-3 rounded-lg text-center text-[#585953] text-[12px] font-semibold">
                                            Amount
                                        </h1>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                            {(page === "profitandloss" ? ProfitTable[0]?.profitData :
                                    page === "trading" ? TradingTable[0]?.creditData :
                                        [])?.map((data, index) => (
                                            <tr key={index} className="px-5 border-b border-tableBorder text-[#4B5C79] text-[12px]">
                                                <td className="p-3">{data.label}</td>
                                                <td className="ps-5">{data.value}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommonPage