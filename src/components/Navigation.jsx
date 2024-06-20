import React from "react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center px-20 py-4 mt-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="max-sm:hidden flex gap-12  items-center py-2">
          <div className="flex gap-1">
            <div className="font-medium">Products</div>
            <div className="pt-1 pl-1">
              <FaAngleDown />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="font-medium">Company</div>
            <div className="pt-1 pl-1">
              <FaAngleDown />
            </div>
          </div>
          <div className="font-medium">Features</div>
          <div className="font-medium">Pricing</div>
          <div className="flex gap-1">
            <div className="font-medium">Support</div>
            <div className="pt-1 pl-1">
              <FaAngleDown />
            </div>
          </div>
        </div>
        <div className="flex lg:gap-12">
          <div className="font-semibold py-2">Login</div>
          <div className="bg-black text-white font-semibold px-4 py-2 rounded-full">
            Open account
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
