import React, { useEffect, useState } from "react";
import CehvronDown from "../../assets/icons/CheveronDown";
import CirclePlus from "../../assets/icons/circleplus";


type Props = {
  expenseData: any;
  setExpenseData: React.Dispatch<React.SetStateAction<any>>;
  liabilities: any[];
  taxRate?: {
    gstTaxRate: { taxName: string; sgst: number; cgst: number; igst: number }[];
  };
};

type Row = {
  expenseAccountId: string;
  expenseAccount: string;
  note: string;
  taxGroup: string;
  sgst: number;
  cgst: number;
  igst: number;
  sgstAmount: number;
  cgstAmount: number;
  igstAmount: number;
  amount: number;
};

const AddExpenseTable: React.FC<Props> = ({
  expenseData,
  setExpenseData,
  liabilities,
  taxRate,
}) => {
  const [rows, setRows] = useState<Row[]>([
    {
      expenseAccountId: "",
      expenseAccount: "",
      note: "",
      taxGroup: "",
      sgst: 0,
      cgst: 0,
      igst: 0,
      sgstAmount: 0,
      cgstAmount: 0,
      igstAmount: 0,
      amount: 0,
    },
  ]);

  const calculateTax = (row: Row) => {
    const amount = row.amount || 0;
    const isSameSupply =
      expenseData.sourceOfSupply === expenseData.destinationOfSupply;

    const sgstAmount = isSameSupply ? (row.sgst / 100) * amount : 0;
    const cgstAmount = isSameSupply ? (row.cgst / 100) * amount : 0;
    const igstAmount = !isSameSupply ? (row.igst / 100) * amount : 0;

    return { sgstAmount, cgstAmount, igstAmount };
  };

  const handleRowChange = (index: number, updatedFields: Partial<Row>) => {
    const updatedRows = rows.map((row, rowIndex) =>
      rowIndex === index
        ? {
            ...row,
            ...updatedFields,
            ...calculateTax({ ...row, ...updatedFields }),
          }
        : row
    );

    setRows(updatedRows);
    setExpenseData((prev: any) => ({
      ...prev,
      expense: updatedRows,
    }));
  };
  const handleTaxGroupChange = (index: number, taxName: string) => {
    const selectedTax = taxName ? JSON.parse(taxName) : null;

    const matchedTax = taxRate?.gstTaxRate?.find(
      (tax) => tax.taxName === selectedTax?.taxName
    );

    // Update the row with the appropriate tax details
    handleRowChange(index, {
      taxGroup: selectedTax?.taxName || "",
      sgst: matchedTax?.sgst || 0,
      cgst: matchedTax?.cgst || 0,
      igst: matchedTax?.igst || 0,
    });
  };

  // console.log(rows.)

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        expenseAccountId: "",
        expenseAccount: "",
        note: "",
        taxGroup: "",
        sgst: 0,
        cgst: 0,
        igst: 0,
        sgstAmount: 0,
        cgstAmount: 0,
        igstAmount: 0,
        amount: 0,
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    setRows((prevRows) => {
      let updatedRows = [...prevRows];

      if (updatedRows.length === 1) {
        updatedRows[0] = {
          expenseAccountId: "",
          expenseAccount: "",
          note: "",
          taxGroup: "",
          sgst: 0,
          cgst: 0,
          igst: 0,
          sgstAmount: 0,
          cgstAmount: 0,
          igstAmount: 0,
          amount: 0,
        };
      } else if (index === 0) {
        updatedRows.splice(index, 1);
      } else {
        updatedRows.splice(index, 1);
      }

      setExpenseData((prev: any) => ({
        ...prev,
        expense: updatedRows,
      }));

      return updatedRows;
    });
  };

  useEffect(() => {
    if (expenseData.expense) {
      setRows(expenseData.expense);
    }
  }, []);

  const calculateTotalTaxes = () => {
    const sgstPctg = rows.reduce((acc, row) => acc + row.sgst, 0);
    const cgstPctg = rows.reduce((acc, row) => acc + row.cgst, 0);
    const igstPctg = rows.reduce((acc, row) => acc + row.igst, 0);
    return { sgstPctg, cgstPctg, igstPctg };
  };

  const { sgstPctg, cgstPctg, igstPctg } = calculateTotalTaxes();

  return (
    <div className="p-4">
      <div className="overflow-auto">
        <table className="w-full bg-gray-50 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="p-2 text-sm text-labelColor bg-[#FAF1F1]">
                Expense Account
              </th>
              <th className="p-2 text-sm text-labelColor bg-[#FAF1F1]">
                Notes
              </th>
              <th className="p-2 text-sm text-labelColor bg-[#FAF1F1]">Tax</th>
              <th className="p-2 text-sm text-labelColor bg-[#FAF1F1]">
                Amount
              </th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody className="bg-[white]">
            {rows.map((row: any, index: number) => (
              <tr key={index} className="border-b border-inputBorder">
                <td className="p-2">
                  <div className="relative w-full">
                    <select
                      value={row.expenseAccount || ""}
                      onChange={(e) => {
                        const selectedAccount = liabilities.find(
                          (account: any) =>
                            account.accountName === e.target.value
                        );
                        handleRowChange(index, {
                          expenseAccount: e.target.value,
                          expenseAccountId: selectedAccount?._id || "",
                        });
                      }}
                      className="appearance-none w-full h-9 text-zinc-700 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                    >
                      <option value="">Select an Account</option>
                      {liabilities &&
                        liabilities.map((account: any) => (
                          <option key={account._id} value={account.accountName}>
                            {account.accountName}
                          </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    value={row.note}
                    onChange={(e) =>
                      handleRowChange(index, { note: e.target.value })
                    }
                    placeholder="Max 500 char"
                    className="appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-2 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </td>
                <td className="p-2">
                  <div className="relative w-full">
                    <select
                      disabled={
                        expenseData.gstTreatment ===
                          "Registered Business - Composition" ||
                        expenseData.gstTreatment === "Unregistered Business" ||
                        expenseData.gstTreatment === "Overseas"
                      }
                      value={row?.taxGroup?.taxName}
                      onChange={(e) =>
                        handleTaxGroupChange(index, e.target.value)
                      }
                      className="appearance-none w-full h-9 text-zinc-700 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                    >
                      <option value="">Select Tax</option>
                      <option value="Non-Taxable">Non-Taxable</option>
                      <optgroup label="Tax">
                        {taxRate?.gstTaxRate?.map(
                          (account: any, index: number) => (
                            <option key={index} value={JSON.stringify(account)}>
                              {account?.taxName}
                            </option>
                          )
                        )}
                      </optgroup>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    value={row.amount}
                    onChange={(e) =>
                      handleRowChange(index, {
                        amount: parseFloat(e.target.value) || 0,
                      })
                    }
                    placeholder="0.00"
                    className="appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-2 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => {
                      handleRemoveRow(index);
                    }}
                    className="text-gray-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div
          onClick={handleAddRow}
          className="hover:bg-gray-100 cursor-pointer rounded-lg py-2 flex items-center"
        >
          <div className="flex items-center space-x-2">
            <CirclePlus color="#975359"  />
            <span className="text-sm font-semibold text-[#975359]">Add Row</span>
          </div>
        </div>
        <div className="text-sm text-gray-70 min-w-[20%] text-textColor space-y-2">
          {/* Sub Total */}
          <div className="flex">
            <div className="w-[75%]">
              <p>Sub Total</p>
            </div>
            <div className="w-full text-end">
              <p>{expenseData.subTotal}</p>
            </div>
          </div>

          {expenseData.sourceOfSupply !== expenseData.destinationOfSupply ? (
            <div>
              {/* IGST */}
              <div className="flex">
                <div className="w-[75%]">
                  <p>IGST[{igstPctg}%]</p>
                </div>
                <div className="w-full text-end">
                  <p>{expenseData.igst}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* SGST */}
              <div className="flex">
                <div className="w-[75%]">
                  <p>SGST[{sgstPctg}%]</p>
                </div>
                <div className="w-full text-end">
                  <p>{expenseData.sgst}</p>
                </div>
              </div>

              {/* CGST */}
              <div className="flex">
                <div className="w-[75%]">
                  <p>CGST[{cgstPctg}%]</p>
                </div>
                <div className="w-full text-end">
                  <p>{expenseData.cgst}</p>
                </div>
              </div>
            </>
          )}

          <div className="flex mt-2 font-bold">
            <div className="w-[75%]">
              <p>Expense Total</p>
            </div>
            <div className="w-full text-end">
              <p>{expenseData.grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseTable;
