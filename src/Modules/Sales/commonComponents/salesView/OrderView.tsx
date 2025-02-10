import { useEffect, useState } from "react";
import PrinterIcon from "../../../../assets/icons/PrinterIcon";
import Button from "../../../../Components/Button";
import useApi from "../../../../Hooks/useApi";
import { endpoints } from "../../../../Services/apiEdpoints";
import CheveronDown from "../../../../assets/icons/CheveronDown";
import PaymentMadeHistory from "./PaymentMadeHistory";
import Journal from "./Journal";

type Props = {
  data?: any;
  page?: string;
  organization?: any;
};

function OrderView({ data, page, organization }: Props) {
  const [supplier, setSupplier] = useState<any>({});
  const { request: getSupplier } = useApi("get", 5009);

  const getSupplierAddress = async () => {
    if (!data?.supplierId) return;

    try {
      const url = `${endpoints.GET_ONE_SUPPLIER}/${data.supplierId}`;
      const { response, error } = await getSupplier(url);
      if (response && !error) {
        setSupplier(response.data);
      } else {
        console.error("Error fetching supplier:", error);
      }
    } catch (error) {
      console.error("Error fetching supplier:", error);
    }
  };

  useEffect(() => {
    getSupplierAddress();
  }, [data]);

  const renderItemTable = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const dummyItems = [
      {
        itemId: "dummy1",
        itemName: "Hair Oil",
        itemImage: "https://s3-alpha-sig.figma.com/img/5b0b/fbb1/bc9ce931d4d4905fb8063ba824885f4a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=icLxKzP9zma9Kmrtbid64AGLZrz8FdR3SZfLV-Q04IRbOPXDX46URLVUWH~bnskMeXkA~sozZZhZPh7zYffCSefLKGL9DpUcg2~o5LauOiTuxwKB-WK5GPuUvUu2pmThxjoyEu9hMHBnwA94qqBVlFXzudG6MhE2RMAO3SYNTuq789TaSHGFkXvRAdn8Pe2pJumXGd8qEsWYM-qwivRq0NjOOfo~KLoSd3Tkxt3s7zVeQL9R6ZIE4hl0FT9wamcvlrWz2QwsW6b~Zj28oFpy4jvdy9-LuakdhwLwBJHwvO09e17fHlHBHbF414czT5GaN5QAtfFnNtFR1wmw-qtgbg__",
        itemQuantity: 10,
        itemCostPrice: 50,
        itemDiscount: 5,
        discountType: "percentage",
        itemAmount: 475,
      },
      {
        itemId: "dummy2",
        itemName: "Hair Massage",
        itemImage: "https://s3-alpha-sig.figma.com/img/7cc7/d177/dacc71ebc0a019659fb5f9e434f45fdb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TErO2~JF2yEtljpaRzX0MeHdBhBU4UOtQtYyXSrR7TvtkXm3fKfygrenjsUy8kvul9CKXTFFtHki3mstiBugc3p2dK7LCUDaww0JZT6pavZAfXUV-thOryzoh-qc8KE9VcE7Tncvwlv13buB0wCONI1-9ikMI446kq2iu4AraHKVJDCzaQKpmQizk0IrPDdy1~fQQbgtAOYvLCzfvB3aXHC1N1-3TZK4B~-4KcDjqnJUBkIOS8WunoUF8VRWu~i-jPmur24oqg~h5eqH41Mh9ZvNmyr3U85d9qjBkISoxhtVMsLm12pSM9joiQISyylgslGzkw39vXRfP2yRnhnDKw__",
        itemQuantity: 5,
        itemCostPrice: 100,
        itemDiscount: 10,
        discountType: "flat",
        itemAmount: 450,
      },
    ];

    if (!dummyItems || dummyItems.length === 0) return <p>No items available</p>;

    return (
      <div className="grid grid-cols-2 gap-4 mb-6">
        {dummyItems.map((item) => (
          <div key={item.itemId}>
            {/* Header Section */}
            <div
              className={`mt-6 p-4 flex flex-col bg-[#FBFDFF] border border-[#00000017] ${openItem === item.itemId ? "rounded-t-2xl border-b-0" : "rounded-2xl"
                }`}
            >
              <div
                className="w-full flex items-center justify-between cursor-pointer"
                onClick={() => setOpenItem(openItem === item.itemId ? null : item.itemId)}
              >
                <div className="flex items-center">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="w-14 h-14 object-cover rounded-[5px]"
                  />
                  <div className="text-textColor ml-4">
                    <p className="text-sm text-[#0B1320]">Item</p>
                    <p className="font-semibold mt-2 text-sm text-[#0B1320]">
                      {item.itemName}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-dropdownText">
                  <button
                    className={`flex-shrink-0 w-10 flex justify-center items-center transform transition-transform duration-300 ${openItem === item.itemId ? "rotate-180" : ""
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenItem(openItem === item.itemId ? null : item.itemId);
                    }}
                  >
                    <CheveronDown />
                  </button>
                </p>
              </div>
            </div>

            {/* Expandable Section */}
            {openItem === item.itemId && (
              <div className="w-full -mt-5 grid grid-cols-5 text-center rounded-b-2xl border-borderRight py-3.5 border-t-0 bg-[#FBFDFF] border border-[#00000017]">
                {/* Ordered */}
                <div className="flex items-center text-start border-r border-borderRight p-4">
                  <div>
                    <p className="text-[#495160] text-sm">Quantity</p>
                    <p className="font-semibold text-sm text-[] mt-2">
                      {item.itemQuantity} PCS
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="items-center text-start border-r border-borderRight p-4">
                  <div>
                    <p className="text-[#495160] text-sm">Status</p>
                    <p className="font-semibold text-sm text-[] mt-2">
                      0 Invoiced
                    </p>
                  </div>
                </div>

                {/* Rate */}
                <div className="items-center border-r text-start border-borderRight p-4">
                  <div>
                    <p className="text-[#495160] text-sm">Rate</p>
                    <p className="font-semibold text-sm text-[] mt-2">
                      $ {item.itemCostPrice}
                    </p>
                  </div>
                </div>

                {/* Discount */}
                <div className="items-center border-r text-start border-borderRight p-4">
                  <div>
                    <p className="text-[#495160] text-sm">Discount</p>
                    <p className="font-semibold text-sm text-[] mt-2">
                      {item.discountType === "percentage"
                        ? ((item.itemCostPrice || 0) * (item.itemDiscount || 0)) / 100
                        : item.itemDiscount}
                    </p>
                  </div>
                </div>

                {/* Amount */}
                <div className="items-center text-start p-4">
                  <div>
                    <p className="text-[#495160] text-sm">Amount</p>
                    <p className="font-semibold text-sm text-[] mt-2">
                      $ {item.itemAmount}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="mt-4">
      <div className="flex items-center justify-start mb-4">
        <p className="text-text_tertiary border-r-[1px] border-borderRight px-4 text-sm font-normal">
          Bill Date:{" "}
          <span className="ms-3 text-dropdownText text-sm font-semibold">
            {data?.billDate}
          </span>
        </p>
        <p className="text-text_tertiary border-r-[1px] border-borderRight px-4 text-sm font-normal">
          Due Date:{" "}
          <span className="ms-3 text-dropdownText text-sm font-semibold">
            {data?.dueDate}
          </span>
        </p>

        {page == "Bills" && (
          <p className="text-text_tertiary pl-4 text-sm font-normal">
            Payment Terms:{" "}
            <span className="ms-3 text-dropdownText text-sm font-semibold">
              {data?.paymentTerms}
            </span>
          </p>
        )}
        {page === "DebitNote" && (
          <p className="text-text_tertiary pl-4 text-sm font-normal">
            Supplier Debit Date:{" "}
            <span className="ms-3 text-dropdownText text-sm font-semibold">
              {data?.supplierDebitDate}
            </span>
          </p>
        )}
      </div>

      {renderItemTable()}
      <PaymentMadeHistory />
      {page === "invoice" && <Journal />}
      <hr className="mt-6 border-t border-inputBorder" />
      <div className="flex justify-between gap-6 mt-4 ">
        <div className="p-6 rounded-lg border border-billingBorder w-[50%] h-fit">
          <p className="text-base font-bold text-text_tertiary">
            Billing Address
          </p>
          <div className="text-sm text-text_tertiary mt-2 space-y-1">
            {supplier ? (
              <>
                {supplier?.supplierDisplayName && (
                  <p>{supplier.supplierDisplayName}</p>
                )}
                {supplier?.companyName && <p>{supplier.companyName}</p>}
                {(supplier?.billingAddressStreet1 ||
                  supplier?.billingAddressStreet2) && (
                    <p>
                      {supplier.billingAddressStreet1 || ""}{" "}
                      {supplier.billingAddressStreet2 && ", "}
                      {supplier.billingAddressStreet2 || ""}
                    </p>
                  )}
                {supplier?.billingCity && <p>{supplier.billingCity}</p>}
                {(supplier?.billingCountry || supplier?.billingPinCode) && (
                  <p>
                    {supplier.billingCountry || ""}{" "}
                    {supplier.billingPinCode
                      ? `- ${supplier.billingPinCode}`
                      : ""}
                  </p>
                )}
                {supplier?.billingPhone && <p>{supplier.billingPhone}</p>}
              </>
            ) : (
              <p>Supplier data not available.</p>
            )}
          </div>
        </div>

        <div className="p-6 rounded-lg border border-billingBorder w-[50%]">
          {page !== "PurchaseOrder" && page !== "DebitNote" ? (
            <>
              <p className="text-base font-bold text-text_tertiary">
                Order Summary
              </p>
              <div className="mt-4 text-sm text-text_tertiary">
                <div className="flex justify-between ">
                  <p>Untaxed Amount</p>
                  <p>
                    {organization?.baseCurrency}{" "}
                    {(data?.grandTotal || 0) - (data?.totalTaxAmount || 0)}
                  </p>
                </div>
                {data?.cgst > 0 && data?.sgst > 0 ? (
                  <>
                    <div className="flex justify-between mt-4">
                      <p>SGST</p>
                      <p>
                        {organization?.baseCurrency} {data?.sgst || 0.0}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p>CGST</p>
                      <p>
                        {organization?.baseCurrency} {data?.cgst || 0.0}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between mt-4">
                    <p>IGST</p>
                    <p>
                      {organization?.baseCurrency} {data?.igst || 0.0}
                    </p>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <p className="text-text_fourthiry font-bold">Total</p>
                  <p>
                    {organization?.baseCurrency} {data?.grandTotal || 0.0}
                  </p>
                </div>
                <hr className="mt-4 border-t border-[#CCCCCC]" />
                <div className="flex justify-end gap-2 mt-6">
                  <Button variant="secondary" size="sm" className="pr-10 pl-10">
                    Cancel
                  </Button>
                  <Button variant="secondary" size="sm" className="pl-10 pr-10" >
                    <PrinterIcon color="#B5636A" />
                    Print
                  </Button>
                  <Button variant="primary" size="sm" className="pl-6 pr-6">
                    Save & Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-base font-bold text-textColor">
                Order Summary
              </p>
              <div className="mt-4 text-sm space-y-2 text-textColor">
                {page === "PurchaseOrder" && (
                  <>
                    <div className="flex justify-between">
                      <p>Other Expense</p>
                      <p>
                        {organization?.baseCurrency} {data?.otherExpense || 0}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Freight</p>
                      <p>
                        {organization?.baseCurrency} {data?.freight || 0}
                      </p>
                    </div>
                  </>
                )}
                <div className="flex justify-between">
                  <p>Sub Total</p>
                  <p>
                    {organization?.baseCurrency} {data?.subTotal || 0}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Total Item</p>
                  <p>{data?.totalItem || 0}</p>
                </div>
                {page === "PurchaseOrder" && (
                  <div className="flex justify-between">
                    <p>Discount</p>

                    <div className="flex items-center gap-2">
                      <div className=" ">
                        <div className="border border-inputBorder rounded-lg flex items-center justify-center p-1 gap-1">
                          <input
                            value={data?.transactionDiscount}
                            name="transactionDiscount"
                            type="text"
                            placeholder="0"
                            className="w-[30px]  focus:outline-none text-center"
                          />
                          <select
                            disabled
                            className="text-xs   text-zinc-400 bg-white relative"
                            value={data.transactionDiscountType}
                            name="transactionDiscountType"
                          >
                            <option value="percentage">%</option>
                            <option value="currency">
                              {organization.baseCurrency}
                            </option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-gray-700 ms-1">
                            <CheveronDown color="gray" />
                          </div>
                        </div>
                      </div>
                      <p>
                        {organization?.baseCurrency}{" "}
                        {data?.transactionDiscountAmount || 0.0}
                      </p>
                    </div>
                  </div>
                )}
                {data?.cgst > 0 && data?.sgst > 0 ? (
                  <>
                    <div className="flex justify-between ">
                      <p>SGST</p>
                      <p>
                        {organization?.baseCurrency} {data?.sgst | 0.0}
                      </p>
                    </div>
                    <div className="flex justify-between ">
                      <p>CGST</p>
                      <p>
                        {organization?.baseCurrency} {data?.cgst | 0.0}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between ">
                    <p>IGST</p>
                    <p>
                      {organization?.baseCurrency} {data?.igst | 0.0}
                    </p>
                  </div>
                )}
                <div className="flex justify-between ">
                  <p>Total Tax Amount</p>
                  <p>
                    {organization?.baseCurrency} {data?.totalTaxAmount | 0.0}
                  </p>
                </div>
                {page === "PurchaseOrder" && (
                  <>
                    <div className="flex justify-between ">
                      <p>Total</p>
                      <p>
                        {organization?.baseCurrency}{" "}
                        {(data?.grandTotal - data?.roundOff) | 0.0}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p>Round Off</p>
                      <p>
                        {organization?.baseCurrency} {data?.roundOff | 0.0}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p>Round Off</p>
                      <p>
                        {organization?.baseCurrency} {data?.roundOff | 0.0}
                      </p>
                    </div>
                  </>
                )}

                <hr className="mt-4 border-t border-[#CCCCCC]" />
                <div className="flex justify-between mt-4 font-bold">
                  <p>Total</p>
                  <p>
                    {organization?.baseCurrency} {data?.grandTotal | 0.0}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderView;
