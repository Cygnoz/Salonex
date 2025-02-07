import Calender from "../../../../assets/icons/Calender";
import CirclePlus from "../../../../assets/icons/circleplus";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";
import Table from "../../../../Components/Table/Table";

type Props = {};

function PaymentHistory({}: Props) {
  const columns = [
    { id: "invoiceNumber", label: "Invoice Number", visible: true },
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
    alert(`Printk clicked for ID: ${id}`);
  };
  return (
    <div>
      <div className=" rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="relative inline-block w-fit">
              <input
                type="date"
                className="py-2 pl-10 pr-4 text-sm text-[#cc6c74] bg-[#fdf9f0] border border-[#cc6c74] rounded-xl outline-none cursor-pointer w-full
        appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-datetime-edit-fields-wrapper]:cursor-pointer"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#cc6c74]">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#cc6c74]">
                  <Calender color={"#cc6c74"} height={15} width={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <Table
            columns={columns}
            data={data}
            onDelete={handleDelete}
            onPrintClick={handlePrintClick}
            searchPlaceholder="Search By Payment ID"
            loading={false}
            searchableFields={["invoiceNumber", "date"]}
          />
        </div>
        <div className="flex justify-end gap-3">
          <div className=" text-end w-[25%] p-5 rounded-lg bg-gradient-to-r from-[#F7ECD9] via-[#F7ECD9] to-[#B5F0D3] ">
            <p className="text-[12px] text-[#495160] font-normal ">
              Outstanding Balance
            </p>
            <p className="text-[16px] text-[#004D4D] font-bold">₹ 2,546</p>
          </div>
          <div className=" text-end w-[25%] p-5 rounded-lg bg-gradient-to-r from-[#F7ECD9] via-[#F7ECD9] to-[#B5F0D3] ">
            <p className="text-[12px] text-[#495160] font-normal ">
              Total Payment
            </p>
            <p className="text-[16px] text-[#004D4D] font-bold">₹ 22,5462</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
