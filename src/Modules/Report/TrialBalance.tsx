import { useState } from "react";
import SearchBar from "../../Components/SearchBar";
import BackIcon from "../../assets/icons/BackIcon";
import { Link } from "react-router-dom";

type Props = {}

function TrialBalance({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const headers = ["Particulars", "Debit", "Credit"];

    const dummyData = [
        {
            "Particulars": "Capital Account",
            "Debit": "",
            "Credit": "5,00,000.00"
        },
        {
            "Particulars": "Loans (Liability)",
            "Debit": "",
            "Credit": "3,00,000.00"
        },
        {
            "Particulars": "Current Liabilities",
            "Debit": "",
            "Credit": "1,20,276.00"
        },
        {
            "Particulars": "Fixed Assets",
            "Debit": "1,00,000.00",
            "Credit": ""
        }
    ]
    return (
        <div>
            <div>
                <div className="flex gap-3 ">
                    <Link to={"/report"}>
                        <BackIcon />
                    </Link>
                    <h1 className="text-lg mt-2 font-bold text-[#2C3E50]">
                        Trail Balance
                    </h1>
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
                    <div>
                        <table className="w-full m-3">
                            <thead>
                                <tr >
                                    {headers.map((header) => <th className="text-[#2C3E50] bg-[#F9F9F9] p-2 text-[14px] font-normal" key={header}>{header}</th>)}
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    dummyData.map((data) => (
                                        <tr className="border-y border-tableBorder">
                                            <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                                {data.Particulars}
                                            </td>
                                            <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                                {data.Debit}
                                            </td>
                                            <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                                {data.Credit}
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td className="text-[#667085] text-[14px] font-semibold text-center py-2">
                                        Total
                                    </td>
                                    <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                        100
                                    </td>
                                    <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                        100000
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrialBalance