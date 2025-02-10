import Table from "../../Components/Table/Table";

type Props = {};

const ReferalBonus: React.FC<Props> = () => {
  const columns = [
    { id: "date", label: "Date", visible: true },
    { id: "price", label: "Price", visible: true },
    { id: "paidAmount", label: "PaidAmount", visible: true },
  ];

  const data = [
    { id: "1", date: "July 14, 2015", price: "0.00", paidAmount: "0.00" },
    { id: "2", date: "October 24, 2018", price: "0.00", paidAmount: "0.00" },

  ];



  return (
    <div >
      <div className="p-5 m-4 rounded-lg bg-[#F5F8FC]">
        <Table
          // page="OrderHistory"
          columns={columns}
          data={data}
          searchPlaceholder="Search by Order ID, Date, or Amount"
          loading={false}
          searchableFields={["orderId", "date", "amount"]}
        />
      </div>
    </div>
  );
};

export default ReferalBonus;
