import ArrowRight from '../assets/icons/ArrowRight';
import image94 from "../assets/images/image 94.png";
import balanceSheet from "../assets/images/image 73.png";
import dayBook from "../assets/images/image 84.png";
import tradingAccount from "../assets/images/image 81.png"
import trialBalance from "../assets/images/image 81w.png"
import { Link } from 'react-router-dom';

const Report = () => {
  const cards = [
    {
      id: 1,
      title: "Profit and Loss",
      description: "Summarises commission for each staff on your item list include quantity amount % of sale and average amount",
      arrowImage: image94,
      width: 59,
      height: 59,
      route: "/report/profitandloss"
    },
    {
      id: 2,
      title: "Balance Sheet",
      description: "Summarises commission for each staff on your item list include quantity amount % of sale and average amount",
      arrowImage: balanceSheet,
      width: 43,
      height: 44,
      route: "/report/balancesheet"
    },
    {
      id: 3,
      title: "Day Book",
      description: "Summarises commission for each staff on your item list include quantity amount % of sale and average amount",
      arrowImage: dayBook,
      width: 69,
      height: 55,
      route: "/report/daybook"
    },
    {
      id: 4,
      title: "Trading Account",
      description: "On this report we can see each product sale",
      arrowImage: tradingAccount,
      width: 52,
      height: 60,
      route: "/report/tradingaccount"
    },
    {
      id: 5,
      title: "Trail Balance",
      description: "On this report we can see the  sale of service by each staff",
      arrowImage: trialBalance,
      width: 56,
      height: 66,
      route: "/report/trilabalance"
    },
  ];

  return (
    <div>
      <div className='justify-between'>
        <h1 className="text-lg font-bold text-[#2C3E50]">Reports</h1>
      </div>
      <br />
      <div className='bg-white p-8 rounded-xl'>
        <div className="grid grid-cols-5 gap-10 py- mb-4">
          {cards.map((card) => (


            <div
              key={card.id}
              className="relative bg-white p-4 rounded-[14px] border border-[#EED2D5] flex flex-col justify-between"
            >
              <Link to={card?.route}>

                <div className="absolute left-4 bottom-[0%] cursor-pointer transform -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#DCDEE275]">
                  <ArrowRight size={11.67} color="#828C99" />
                </div>
              </Link>
              <div>
                <p className="text-[#333333] text-xs font-semibold">{card.title}</p>
                <p className="mt-4 text-[#4B5C79] text-[10px]">{card.description}</p>
              </div>
              <div className="flex justify-end items-center mt-2">

                <img
                  src={card.arrowImage}
                  style={{
                    width: `${card.width}px`,
                    height: `${card.height}px`,
                  }}
                  className="object-cover"
                />

              </div>
            </div>
          ))}


        </div>
      </div>

    </div>
  );
};

export default Report;
