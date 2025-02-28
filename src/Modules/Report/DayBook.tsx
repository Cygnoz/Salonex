import { Link } from "react-router-dom"
import BackIcon from "../../assets/icons/BackIcon"
import { useState } from "react";
import SearchBar from "../../Components/SearchBar";

type Props = {}

function DayBook({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const headers = ["Date", "Particulars", "Voucher Type", "Voucher Number", "Debit", "Credit"];



    return (
        <div>
            <div className="flex gap-3 ">
                <Link to={"/report"}>
                    <BackIcon />
                </Link>
                <h1 className="text-lg mt-2 font-bold text-[#2C3E50]">
                    Day Book
                </h1>
            </div>
            <div className="bg-[#FFFFFF] p-2 rounded-xl mt-4">
                <div>
                    <SearchBar
                        placeholder="Search Report"
                        searchValue={searchValue}
                        onSearchChange={(value) => {
                            setSearchValue(value);
                        }}
                    />
                </div>
                <div>
                    <table className="w-full m-3">
                        <thead>
                            <tr >
                                {headers.map((header) => <th className="text-[#2C3E50] bg-[#F9F9F9] p-2 text-[14px] font-normal" key={header}>{header}</th>)}
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-y border-tableBorder">
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                    12-12-2012
                                </td>
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                    By Bank A/C
                                </td>
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                    Contra
                                </td>
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                    1
                                </td> 
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                50000.00
                                </td>
                                <td className="text-[#667085] text-[14px] font-normal text-center py-2">
                                    0000
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default DayBook