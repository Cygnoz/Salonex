import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "../../../Components/Button"
import Modal from "../../../Components/modal/Modal";
import Input from "../../../Components/Form/Input";
import CirclePlus from "../../../assets/icons/circleplus";
import CheveronDown from "../../../assets/icons/CheveronDown";
import bgImg1 from "../../../assets/images/Savings-bro 1 (1).png"
import bgImg2 from "../../../assets/images/Ribbon-3.png"
import toast from "react-hot-toast";
import { endpoints } from "../../../Services/apiEndpoints";
import useApi from "../../../Hooks/useApi";
import Pen from "../../../assets/icons/Pen";
import { useRegularApi } from "../../../context/ApiContext";

type Props = { page?: string, accountData: any, fetchAllAccounts: () => void };
const initialBankAccount = {
  _id: "",
  accountName: "",
  accountCode: "",
  accountSubhead: "Bank",
  accountHead: "Asset",
  accountGroup: "Asset",
  openingBalance: "",
  openingBalanceDate: "",
  description: "",
  bankAccNum: "",
  bankIfsc: "",
  bankCurrency: "",
  debitOpeningBalance: "",
  creditOpeningBalance: "",
};


const NewBankModal = ({ page, accountData, fetchAllAccounts }: Props) => {
  const { currencyData } = useRegularApi()

  const [isModalOpen, setModalOpen] = useState(false);
  const [bankAccount, setBankAccount] = useState(initialBankAccount);
  const [openingType, setOpeningType] = useState("Debit");
  const { request: CreateAccount } = useApi("post", 5001);
  const { request: editAccount } = useApi("put", 5001);

  useEffect(() => {
    if (page === "edit" && accountData) {
      setBankAccount(accountData);
      setOpeningType(accountData.debitOpeningBalance ? "Debit" : "Credit");
    }
  }, [page, accountData, isModalOpen]);

  const openModal = () => {
    if (page === "edit" && accountData) {
      setBankAccount(accountData);
      setOpeningType(accountData.debitOpeningBalance ? "Debit" : "Credit");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;

    // If the value is negative, reset it to 0
    if (name === "openingBalance" && parseFloat(value) < 0) {
      processedValue = "0";
    }

    // Update openingType and related balances accordingly
    if (name === "openingType") {
      setOpeningType(processedValue);
      setBankAccount((prevFormValues) => ({
        ...prevFormValues,
        debitOpeningBalance: processedValue === "Debit" ? prevFormValues.openingBalance : "",
        creditOpeningBalance: processedValue === "Credit" ? prevFormValues.openingBalance : "",
      }));
    } else if (name === "openingBalance") {
      setBankAccount((prevFormValues) => ({
        ...prevFormValues,
        debitOpeningBalance: openingType === "Debit" ? processedValue : prevFormValues.debitOpeningBalance,
        creditOpeningBalance: openingType === "Credit" ? processedValue : prevFormValues.creditOpeningBalance,
      }));
    } else {
      setBankAccount((prevBankAccount) => ({
        ...prevBankAccount,
        [name]: processedValue,
      }));
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const url =
        page === "edit"
          ? `${endpoints.EDIT_NEW_ACCOUNT}/${bankAccount._id}`
          : endpoints.Add_NEW_ACCOUNT;
      const API = page === "edit" ? editAccount : CreateAccount;

      const body = bankAccount;
      const { response, error } = await API(url, body);
      if (!error && response) {
        toast.success(response.data.message);
        closeModal()
        fetchAllAccounts();
        setBankAccount(initialBankAccount);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const formRef = useRef<HTMLFormElement>(null);

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  return (
    <div>
      {page === "edit" ? (
        <div onClick={openModal} className="cursor-pointer">
          <Pen color={"#C88000"} />
        </div>
      ) : (
        <Button onClick={openModal}>
          <CirclePlus />
          <p> New Account</p>
        </Button>
      )}

      <Modal open={isModalOpen} onClose={closeModal} className="w-[649px] text-start p-8 bg-[#F8F4F4]">
        <div
          className=" rounded-2xl bg-[#ffd6da] flex ps-5 justify-between items-center relative h-[143.51px]"

        >
          <div className="relative flex-1">
            <p className="text-[#383c42] font-bold text-base">Create Bank Account</p>
            <p className="text-text_tertiary text-xs mt-2">
              Set up your cash account effortlessly!
            </p>
          </div>
          <div className="flex ml-auto">
            <img src={bgImg2} alt="" className="h-[140px] mt-2" />

            <img src={bgImg1} alt="" className="-[138px]  " />
          </div>
        </div>



        <div className="mt-6 rounded-2xl text-text_tertiary text-sm">
          <form ref={formRef} onSubmit={onSubmit}>
            <p className="mb-2">Name</p>
            <Input
              name="accountName"
              value={bankAccount.accountName}
              onChange={handleChange}
              placeholder="Enter Your name" />

            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Account Code</label>
                <Input
                  name="accountCode"
                  value={bankAccount.accountCode}
                  onChange={handleChange}
                  placeholder="Enter code"
                />
              </div>

              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Account Number</label>
                <Input
                  name="bankAccNum"
                  value={bankAccount.bankAccNum}
                  onChange={handleChange}
                  placeholder="Enter account number"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">IFSC Code</label>
                <Input
                  name="bankIfsc"
                  value={bankAccount.bankIfsc}
                  onChange={handleChange}
                  placeholder="Enter IFSC code"
                />
              </div>

              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Currency</label>
                <div className="relative w-full">
                  <select
                    name="bankCurrency"
                    value={bankAccount.bankCurrency}
                    onChange={handleChange}
                    className="block appearance-none w-full text-zinc-400 bg-white border border-slate-200 text-sm h-[39px] pl-3 pr-8 rounded-full leading-tight outline-none"
                  >
                    {currencyData?.map((data: any) => (
                      <option
                        key={data._id}
                        value={data.currencyCode}
                        selected={data.currencyName}
                        className="text-black option-spacing"
                      >
                        {`${data.currencyName} (${data.currencySymbol})`}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CheveronDown color="#495160" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-labelColor text-sm">Opening Balance</label>
              <div className="flex">
                <div className="relative w-24 ">
                  <select
                    className="block appearance-none cursor-pointer w-full h-9 text-[#818894] bg-white border border-borderColor 
                                   text-sm pl-3.5 pr-2 rounded-l-full leading-tight 
                                   focus:outline-none"
                    name="openingType"
                    value={openingType}
                    onChange={handleChange}
                  >
                    <option value="Debit">Dr</option>
                    <option value="Credit">Cr</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CheveronDown color="#495160" />
                  </div>
                </div>
                <input
                  type="number"
                  min={0}
                  className="text-xs w-[100%] rounded-r-full text-start bg-white border border-borderColor h-9 py-2 px-3 focus:outline-none"
                  placeholder="Enter Opening Balance"
                  name="openingBalance"
                  value={
                    openingType === "Debit"
                      ? bankAccount.debitOpeningBalance
                      : bankAccount.creditOpeningBalance
                  }
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2">Description</p>
              <Input
                name="description"
                value={bankAccount.description}
                onChange={handleChange}
                placeholder="Enter Description" size="lg" />
            </div>
          </form>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold pl-14 pr-14">
            Cancel
          </Button>
          <Button onClick={handleExternalSubmit} className="pl-14 pr-14">save</Button>
        </div>


      </Modal>
    </div>
  )
}

export default NewBankModal