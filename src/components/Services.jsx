import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import exp_img1 from "../assets/exp_img1.png";
import exp_img2 from "../assets/exp_img2.png";

function Service() {
  return (
    <>
      <div className="text-6xl font-semibold text-center px-96 pb-14">
        Feel the best experience with our features
      </div>

      <div className="flex px-24 gap-4 pb-4">
        <div className="bg-[#F6F7F9] flex-1 rounded-xl p-8 pb-0">
          <div className="text-4xl py-8">
            <FaRegCreditCard />
          </div>
          <div className="text-5xl font-semibold">
            Custom and design your card, make it unique
          </div>
          <div className="py-6 text-xl text-gray-500">
            Create a custom card that reflects your unique style and
            personality. Choose from a range of colors, patterns, and designs to
            customize the look of your card.
          </div>
          <div className="py-2 flex justify-center">
            <img src={exp_img1} alt="" style={{ height: "450px" }} />
          </div>
        </div>

        <div className="bg-[#F6F7F9] flex-1 rounded-xl p-8 pb-0">
          <div className="text-4xl py-8">
            <GoGraph />
          </div>
          <div className="text-5xl font-semibold">
            Personalized your financial insights and goals
          </div>
          <div className="py-6 text-xl text-gray-500">
            Track your spending patterns, analyze income or expenses easily, and
            receive personalized recommendations to optimize your financial
            habits.
          </div>
          <div className="py-2 flex justify-center">
            <img src={exp_img2} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#F6F7F9] flex mx-24 p-8 rounded-xl">
        <div className="w-2/4">
          <div className="text-4xl py-8">
            <FaDollarSign />
          </div>
          <div className="text-5xl font-semibold">
            Free transfer anywhere around the world
          </div>
          <div className="py-6 text-xl text-gray-500">
            Experience the freedom of hassle-free money transfers with our free
            transfer admin finance app. Say goodbye to unnecessary fees and
            enjoy seamless transactions.
          </div>
        </div>

        <div className="w-1/4 m-4 bg-white rounded-xl p-6 ">
          <div className="flex justify-between">
            <div className="text-4xl">
              <CiBank />
            </div>
            <div className="border border-gray-400 font-semibold px-4 py-1 rounded-full text-gray-400">
              Free
            </div>
          </div>

          <div className="text-gray-500 py-2 text-lg">Bank transfer</div>

          <div
            className="bg-[#F6F7F9] rounded-3xl p-3 flex justify-between mx-4"
            style={{ height: "55px" }}
          >
            <div
              className="bg-white rounded-full"
              style={{ height: "30px", width: "30px" }}
            ></div>
            <div className="flex justify-center items-center">
              <FaArrowRight />
            </div>
            <div
              className="bg-white rounded-full"
              style={{ height: "30px", width: "30px" }}
            ></div>
          </div>
          <div className="text-gray-500 py-3 text-lg text-center">to</div>
          <div className="text-gray-500 py-2 text-lg">Amount</div>
          <div className="font-semibold text-4xl">$1,500.00</div>
          <div className="text-gray-500 py-2 text-lg">1-3 business days</div>
        </div>
      </div>

      <div className="flex px-24 justify-between gap-4 py-4">
        <div className="bg-[#F6F7F9] w-1/3 p-8 rounded-3xl">
          <div className="text-4xl pb-8">
            <FaRegCircle />
          </div>
          <div className="font-semibold text-4xl">Hold money in 30+ currencies</div>
        </div>
        <div className="bg-[#F6F7F9] w-1/3 p-8 rounded-3xl">
          <div className="text-4xl pb-8">
            <RiBillLine />
          </div>
          <div className="font-semibold text-4xl">Subscriptions you control in one place</div>
        </div>
        <div className="bg-black w-1/3 p-8 rounded-3xl">
          <div className="text-white text-5xl pb-8">Check our other product features</div>
          <div className="bg-yellow-300 font-semibold px-4 py-2 rounded-full w-1/2">
            Open account
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;
