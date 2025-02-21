import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import Table from "../../../Components/Table/Table";
import { useContext, useEffect, useState } from "react";
import CirclePlus from "../../../assets/icons/circleplus";
import toast from "react-hot-toast";
import { endpoints } from "../../../Services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import { PurchaseContext, TableResponseContext } from "../../../context/ContextShare";

type Props = {};

function PaymentMade({ }: Props) {

  const navigate = useNavigate();

  const [columns] = useState([
    { id: "paymentDate", label: "Date", visible: true },
    { id: "paymentMade", label: "Payment#", visible: true },
    { id: "supplierDisplayName", label: "Vendor Name", visible: true },
    { id: "bill", label: "Bill#", visible: true },
    { id: "paymentMode", label: "Mode", visible: true },
    { id: "total", label: "Amount", visible: true },
  ]);

  const [allBill, setAllBill] = useState<any[]>([]);
  const { request: getBills } = useApi("get", 5005);
  const { loading, setLoading } = useContext(TableResponseContext)!;
  const { purchaseResponse } = useContext(PurchaseContext)!;
  const { request: deleteAccount } = useApi("delete", 5005);

  const getAllBill = async () => {
    try {
      setLoading({ ...loading, skeleton: true, noDataFound: false });
      const url = `${endpoints.GET_PAYMENTMADE}`;
      const { response, error } = await getBills(url);

      if (!error && response) {
        setAllBill(response.data.allPayments);
        setLoading({ ...loading, skeleton: false });
      } else {
        console.error(error);
        setLoading({ ...loading, skeleton: false, noDataFound: true });
      }
    } catch (error) {
      console.error(error);
      setLoading({ ...loading, skeleton: false, noDataFound: true });
    }
  };

  useEffect(() => {
    getAllBill();
  }, [purchaseResponse]);

  const handleRowClick = (id: string) => {
    navigate(`/purchase/payment-made/view/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const url = `${endpoints.DELETE_PAYMENT_MADE}/${id}`;
      const { response, error } = await deleteAccount(url);
      if (!error && response) {
        toast.success(response.data.message);
        getAllBill();
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error("Error in fetching one item data.");
      console.error("Error in fetching one item data", error);
    }

  };

  const handleEditClick = (id: string) => {
    navigate(`/purchase/payment-made/edit/${id}`);
  };

  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "bill" && item.unpaidBills) {
      return item.unpaidBills.map((bill: any) => bill.billNumber).join(", ");
    }
    return item[colId as keyof typeof item];
  };

  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Payment Made</h1>
          <p className="text-[#818894] text-xs">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla{" "}
          </p>
        </div>
        <div className="ml-auto">
          <Link to="/purchase/payment-made/new">
            <Button variant="primary" size="sm">
              <CirclePlus color={"white"} size={18} />
              New Payment
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white mt-2 ">
        <Table
          columns={columns}
          data={allBill}
          onRowClick={handleRowClick}
          loading={loading.skeleton}
          searchPlaceholder={"Search payment"}
          searchableFields={["billNumber", "supplierDisplayName"]}
          onDelete={handleDelete}
          renderColumnContent={renderColumnContent}
          onEditClick={handleEditClick}
        />
      </div>
    </div>
  );
}

export default PaymentMade;
