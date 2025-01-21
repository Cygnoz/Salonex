import Eye from "../../../assets/icons/Eye";
import MeasureIcon from "../../../assets/icons/MeasureIcon";
import CasualPant from  '../../../assets/images/CasualPant.png'
import Pen from "../../../assets/icons/Pen";
import Modal from "../../../Components/modal/Modal";
import CrossIcon from "../../../assets/icons/CrossIcon";

interface Item {
    imgSrc?: string;
    item?: string;
    measuredBy?: string;
}

interface ItemMeasurementModalProps {
    item: Item | null;
    onClose: () => void;
}

const ItemMeasurementModal: React.FC<ItemMeasurementModalProps> = ({ item, onClose }) => {
    if (!item) return null; // Render nothing if no item is selected

    const measurements = [
        {
            createdOn: "Dec 13 2024",
            orderNo: "ORD0111",
            status: "Latest",
        },
        {
            createdOn: "Aug 24 2024",
            orderNo: "ORD012",
            status: "New",
        },
        {
            createdOn: "Feb 21 2024",
            orderNo: "ORD013",
            status: "Old",
        },
        {
            createdOn: "Nov 24 2023",
            orderNo: "ORD014",
            status: "Old",
        },
    ];

    return (
        <Modal open={!!item} onClose={onClose} align="center" className="h-[550px]  w-[861px] rounded-[16px]">
            {/* First Row: Heading and Close Icon */}
            <div className="p-2 m-2   bg-white flex justify-between items-center">
                <h1 className="font-bold text-md text-[#0B1320]">Item Measurement</h1>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 transition"
                    aria-label="Close modal"
                >
                    <CrossIcon/>
                </button>
            </div>

            {/* Second Row: Card Section */}
            <div className="p-2 w-[813px] h-[60px] m-4 bg-gradient-to-r from-green-100 to-green-50 rounded-md shadow-sm flex items-center gap-4">
                {/* First Column: Image */}
                <img
                    src={CasualPant} // Placeholder for missing images
                    alt={item.item || "Item"}
                    className="w-10 h-10 object-cover rounded-full"
                />
                {/* Second Column: Item Name */}
                <div className="flex-1">
                    <p className="text-xs text-[#495160]">Item</p>
                    <h2 className="font-bold text-sm text-[#0B1320]">{item.item || "Unnamed Item"}</h2>
                </div>
                {/* Third Column: Measured By */}
                <div className="text-right mr-10">
                    <p className="text-xs text-[#495160] mr-10">Measured by:</p>
                    <h3 className="font-bold text-sm text-[#0B1320]">{item.measuredBy || "Unknown"}</h3>
                </div>
            </div>

            {/* Third Row: Subheading */}
            <div className="p-1 m-2">
                <h3 className="font-bold text-[#0B1320] text-sm">Measurements</h3>
            </div>

            {/* Fourth Row Onwards: Measurement Details */}
            <div className="px-4 space-y-3 m-3 w-[813px]">
                {measurements.map((measurement, index) => (
                    <div
                        key={`${measurement.orderNo}-${index}`}
                        className={`p-3 rounded-md shadow-sm flex items-center border justify-between ${measurement.status === "Latest"
                                ? "bg-[#F9F2E7] border-[#B47300]"
                                : "bg-gray-50 border-gray-200"
                            }`}
                    >
                        {/* 1st Column: Icon */}
                        <div className="w-1/8 flex justify-start">
                            <span
                                className="p-2  text-[#FFFFFF] text-lg"
                                aria-label="Icon"
                            >
                                <MeasureIcon/>
                            </span>
                        </div>

                        {/* 2nd Column: Created Date */}
                        <div className="w-1/6 ">
                            <p className="text-[11px] font-normal text-[#495160]">Created Date</p>
                            <p className="text-xs text-[#0B1320] font-semibold">{measurement.createdOn}</p>
                        </div>

                        {/* 3rd Column: Order No */}
                        <div className="w-1/2">
                            <p className="text-xs text-gray-500">Order No</p>
                            <p className="text-sm text-gray-800 font-medium">{measurement.orderNo}</p>
                        </div>
                              
                 {/* Status Badge */}
                        <div>
                         {measurement.status && (
                                <span
                                    className={`text-xs text-[#495160] px-3 py-1 rounded-lg ${measurement.status === "Latest"
                                            ? "bg-[linear-gradient(127.73deg,#FFFFFF_10.69%,#FFE1AB_52.28%,#59F3A7_139.31%)] "
                                            : measurement.status === "New"
                                                ? "bg-[#C4ECD8]"
                                                : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {measurement.status}
                                </span>
                            )}
                        </div>

                        {/* 4th Column: Status and Actions */}
                        <div className="w-1/4 flex items-center justify-end gap-4">
                           
                            {/* Actions: View and Edit */}
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="View measurement"
                            >
                                <Eye color="#966000" size={18}/>
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Edit measurement"
                            >
                                <Pen color="#966000" size={16}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </Modal>


    );
};

export default ItemMeasurementModal;
