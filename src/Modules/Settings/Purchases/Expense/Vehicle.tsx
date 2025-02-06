import { useState } from "react";
import SearchBar from "../../../../Components/SearchBar"
import Button from "../../../../Components/Button";
import Pen from "../../../../assets/icons/Pen";
// import bgImage from "../../../../assets/Images/14.png"
import Trash from "../../../../assets/icons/Trash";
import Modal from "../../../../Components/modal/Modal";
import taxBgImage from "../../../../assets/images/Frame 629026.png"
import Input from "../../../../Components/Form/Input";
import CirclePlus from "../../../../assets/icons/circleplus";

type Props = {}

const tableHeaders = [
  "Vehicle Name",
  "Hint",
  "Actions"
]

const tableData = [
  {
    vehicleName: "Maglev",
    hint: "Lorem ipsum sid faact is",

  },
  {
    vehicleName: "Maglev",
    hint: "Lorem ipsum sid faact is",
  },
  {
    vehicleName: "Maglev",
    hint: "Lorem ipsum sid faact is",
  }
]

const Vehicle = ({ }: Props) => {

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="my-3 ">
      <div className="flex mb-3 gap-3">
        <SearchBar
          placeholder="Search"
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
        <Button size="sm" className="text-sm min-w-fit" onClick={openModal}><CirclePlus />New Vehicle</Button></div>

      <div className=" bg-white p-4 rounded-xl">

        <table className="min-w-full text-text_tertiary border  rounded-xl bg-white mt-3">
          <thead className="text-[12px] text-center text-dropdownText rounded-xl">
            <tr style={{ backgroundColor: "#F9F7F0" }}>
              {tableHeaders.map((heading, index) => (
                <th
                  className="py-3  px-8 font-medium border-b border-tableBorder"
                  key={index}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center text-dropdownText text-sm">
            {tableData.map((item: any, index: number) => (<tr key={index} className="border-b border-tableBorder" >

              <td className="py-3 whitespace-nowrap text-xs">
                {item.vehicleName}
              </td>
              <td className="py-3 whitespace-nowrap text-xs">
                {item.hint}
              </td>

              <td className="py-3 whitespace-nowrap text-sm flex gap-3 items-center justify-center">
                <Pen color={"#3C7FBC"} />
                <Trash color={"red"} />
              </td>

            </tr>))}

          </tbody>
        </table>
      </div>




      <Modal open={isModalOpen} onClose={closeModal} style={{ width: "45%" }}>
        <div className="p-8 mt-3">
        <div className="relative flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={taxBgImage} className="w-12" alt="" />
              <div>
                <p className="text-[#004D4D] font-bold text-base">New Vehicle</p>
                <p className="text-[#818894] text-[10px]">
                  Lorem ipsum dolor sit amet cons Lorem ipsum dolor sit amet cons amet cons Lorem ipsu
                </p>
              </div>
            </div>
            <div className="text-4xl text-[#2C3E50]  cursor-pointer">&times;</div>
          </div>
          <form className="mt-6">
            <div className=" gap-4  space-y-2 rounded-md">
              <div className="mb-4">
                <Input placeholder="Enter Vehicle Name" label="Vehicle Name" />
              </div>
              <div>
                <Input placeholder="Value" label=" Hint (Max 50 Chars)" />
              </div>
              <br />
            </div>
            <div className="flex justify-end gap-2 mb-3 ">
              <Button variant="secondary" size="sm" onClick={closeModal} className="pl-10 pr-10">
                Cancel
              </Button>
              <Button variant="primary" size="sm" className="pl-10 pr-10">
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Vehicle