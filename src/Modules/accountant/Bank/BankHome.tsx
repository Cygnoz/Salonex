
import { useNavigate } from "react-router-dom";
import Table from "../../../Components/Table/Table";
import NewBankModal from "./NewBankModal";
import { endpoints } from "../../../Services/apiEndpoints";
import { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import toast from "react-hot-toast";
import { useResponse } from "../../../context/ResponseContext";

type Props = {};

interface Account {
  _id: string;
  accountName: string;
  accountCode: string;
  accountSubhead: string;
  accountHead: string;
  description: string;
}

function BankHome({ }: Props) {
  const [accountData, setAccountData] = useState<Account[]>([]);
  const [oneAccountData, setOneAccountData] = useState<any>({});
  const {loading,setLoading}=useResponse()

  const { request: AllAccounts } = useApi("get", 5001);
  const { request: fetchOneItem } = useApi("get", 5001);
  const { request: deleteAccount } = useApi("delete", 5001);


  const fetchAllAccounts = async () => {
    try {
      setLoading(true);
      const url = `${endpoints.Get_ALL_Acounts}`;
      const { response, error } = await AllAccounts(url);

      if (!error && response) {
        setAccountData(response.data.filter((account: Account) => account.accountSubhead === "Bank"));
      } else {
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
      
    }finally{
      setLoading(false);
    }
  };

  const getOneItem = async (item:any) => {
    try {
      const url = `${endpoints.GET_ONE_ACCOUNT}/${item._id}`;
      const { response, error } = await fetchOneItem(url);
      if (!error && response) {
        setOneAccountData(response.data);
      } else {
        console.error("Failed to fetch one item data.");
      }
    } catch (error) {
      toast.error("Error in fetching one item data.");
      console.error("Error in fetching one item data", error);
    }
  };

  useEffect(() => {
    fetchAllAccounts();
  }, []);

  const Columns = [
    { id: "accountName", label: "Account Name", visible: true },
    { id: "accountCode", label: "Account Code", visible: true },
    { id: "accountSubhead", label: "Account Type", visible: true },
    { id: "description", label: "Document", visible: true },
    { id: "accountHead", label: "Parent Account Type", visible: true },
  ];

  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/accountant/viewOne/${id}`);
  };

  const HandleOnSave = () => {
    fetchAllAccounts();
  }

  const handleDelete=async(id:string)=>{
    try {
      const url = `${endpoints.DELETE_ACCONUT}/${id}`;
      const { response, error } = await deleteAccount(url);
      if (!error && response) {
        toast.success(response.data.message);
        fetchAllAccounts()
        console.log(response.data);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error("Error in fetching one item data.");
      console.error("Error in fetching one item data", error);
    }
  }



  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-base font-bold text-heading">Bank</h1>
          <p className="text-subHeading mt-2 text-xs">Lorem ipsum dolor sit amet consectetur, egestas consectetur amet.</p>
        </div>
        <div>
          <NewBankModal accountData={accountData} fetchAllAccounts={HandleOnSave} />
        </div>
      </div>
      <div className="mt-6">
        <Table
          columns={Columns}
          data={accountData}
          searchPlaceholder={"Search account"}
          searchableFields={["accountName", "accountCode", "accountSubhead", "accountHead"]}
          loading={loading}
          isPrint
          onRowClick={handleNavigate}
          onDelete={handleDelete}
          renderActions={(item) => (
            <div
            onClick={() => {
              getOneItem(item);
            }}
          >
            <NewBankModal
              page="edit"
              fetchAllAccounts={() => {}}
              accountData={oneAccountData}
            />
          </div>
          )}
        />
      </div>
    </div>
  );
}

export default BankHome;
