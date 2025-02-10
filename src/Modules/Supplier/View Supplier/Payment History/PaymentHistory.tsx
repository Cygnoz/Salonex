import { useRef, useState } from "react";
import Calender from "../../../../assets/icons/Calender";
import CheveronDown from "../../../../assets/icons/CheveronDown";
import Table from "../../../../Components/Table/Table";
import SearchBar from "../../../../Components/SearchBar";

type Props = {};

function PaymentHistory({}: Props) {
  const [fromDate, setFromDate] = useState<string>("");
  const fromDateRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleFromDateClick = () => {
    fromDateRef.current?.showPicker();
  };

  const columns = [
    { id: "invoiceNumber", label: "Payment Id", visible: true },
    { id: "date", label: "Date", visible: true },
    { id: "amount", label: "Amount", visible: true },
    { id: "remark", label: "Remark", visible: true },
  ];

  const data = [
    {
      invoiceNumber: "INV00234",
      date: "28 May 2024",
      amount: 2000.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00134",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00124",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00114",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00034",
      date: "27 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
  ];

  const handleDelete = (id: string) => {
    alert(`handleDelete clicked for ID: ${id}`);
  };

  const handlePrintClick = (id: string) => {
    alert(`Print clicked for ID: ${id}`);
  };

  return (
    <div>
      <div className="rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2 w-full">
            <div
              className="relative border border-[#cc6c74] flex  px-2 py- rounded-xl text-xs items-center cursor-pointer"
              onClick={handleFromDateClick}
            >
              <div className="pointer-events-none inset-y-0 flex items-center px-2 text-[#cc6c74]">
                <Calender color="#cc6c74" height={18} width={18} />
              </div>
              <div className="text-[#cc6c74] font-medium ">
                {" "}
                {fromDate || "Select Date"}
              </div>
              <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-[#cc6c74]">
                <CheveronDown color="#cc6c74" />
              </div>
              <input
                placeholder="Select Date"
                type="date"
                ref={fromDateRef}
                className="absolute inset-0 opacity-0 cursor-pointer"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="ml-auto w-[40%] -my-1 ">
              <SearchBar
                placeholder={"Serach By Id"}
                searchValue={searchValue}
                onSearchChange={(value) => {
                  setSearchValue(value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <Table
            columns={columns}
            data={data}
            onDelete={handleDelete}
            onPrintClick={handlePrintClick}
            loading={false}
            searchableFields={["invoiceNumber", "date"]}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
