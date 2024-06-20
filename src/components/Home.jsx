import React from "react";
import home from "../assets/home.png";
import home2 from "../assets/home2.png";

function Home() {
  return (
    <>
      <div className="flex py-10 px-14">
        <div className="flex-1 pr-10 pl-28">
          <img src={home} alt="" />
        </div>

        <div className="flex-1">
          <div className="text-8xl font-semibold">
            Control your financial future easily
          </div>
          <div className="py-8 text-xl text-gray-500">
            From easy money management, to financial goals and investments. Open
            your account in a flash
          </div>
          <div className="flex mt-4 gap-8">
            <div className="bg-yellow-300 font-semibold px-4 py-2 rounded-full">
              Open account
            </div>
            <div className="border border-gray-400 font-semibold px-4 py-2 rounded-full">
              Generate your card
            </div>
          </div>

          <div className="flex py-14 gap-8">
            <div>
              <img src={home2} alt="" />
            </div>
            <div>
              <div className="text-5xl font-bold">15 Million+</div>
              <div className="text-gray-500 py-4">
                Trusted by million of satisfied users, our financial services
                have made a real impact on people's lives
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
