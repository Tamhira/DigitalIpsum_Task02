import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { DiApple } from "react-icons/di";
import img2 from "../assets/img2.png";
import img5 from "../assets/img5.png";

function About() {
  return (
    <>
      <div className="flex px-24 gap-4 pt-24">
        <div className="w-1/3 flex justify-end">
          <img src={img5} alt="" style={{ width: "450px", height: "500px" }} />
        </div>

        <div className="w-2/3 pr-14">
          <div className="text-6xl font-bold flex-1 pb-14">
            Join 15+ million people who already trust us with their money
          </div>
          <div className="py-8 text-xl text-gray-500">
            Overall, this app has been a life-changer for me. It has
            revolutionized the way I approach my finances, providing me with the
            tools, insights, and security I need to unlock my financial freedom.
          </div>
          <div className="flex justify-between py-8">
            <div className="text-2xl font-bold">Ellena Putri</div>
            <div className="flex text-right text-4xl gap-2">
              <div className="hover:text-yellow-300">
                <FaArrowCircleLeft />
              </div>
              <div className="hover:text-yellow-300">
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F7F9] rounded-xl m-24">
        <div className="text-6xl font-semibold text-center pb-4 pt-14">
          Get the Finsy mobile app.
        </div>
        <div className="pb-8 text-xl text-gray-500 text-center">
          With this platform, you can access your account anywhere, anytime for
          balance and so much more.
        </div>
        <div className="flex justify-center items-center gap-14 pt-8">
          <div className="flex border border-gray-400 px-4 py-2 rounded-full gap-2">
            <div className="pt-1">
              <DiApple />
            </div>
            <div className="font-semibold">Download Now</div>
          </div>
          <div className="flex border border-gray-400 px-4 py-2 rounded-full gap-2">
            <div className="pt-1">
              <IoLogoGooglePlaystore />
            </div>
            <div className="font-semibold">Download Now</div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-14"><img src={img2} alt="" /></div>
      </div>
    </>
  );
}
export default About;
