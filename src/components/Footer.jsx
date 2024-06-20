import React from "react";
import logo2 from "../assets/logo2.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="bg-[#171717] mx-24 p-14 text-white rounded-xl">
        <div className="flex justify-between gap-4 pb-8">
          <div>
            <div className="text-yellow-400 text-6xl">
              <MdEmail />
            </div>
            <div className="text-white text-6xl font-semibold py-8">
              Keep up with the latest
            </div>
            <div className="text-gray-500 text-lg">
              Join our newsletter to stay up to date on features and releases.
            </div>
          </div>
          <div className="px-24 pt-20">
            <div className="text-xl">Stay up to date</div>
            <div className="flex gap-2 py-4">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="rounded-full px-4 bg-gray-800"
              />
              <button className="bg-yellow-300 px-3 py-2 rounded-full text-black font-semibold">
                Subscribe
              </button>
            </div>
            <div className="text-gray-500">
              By subscribing you agree to with our Privacy Policy
            </div>
          </div>

          {/* <div className="w-2/5 pr-8">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="py-8">
              Transforming Ideas into Digital Excellence through Innovative
              Solutions and Unmatched Commitment to Your Success
            </div>
            <div className="py-4">Subscribe to our Newsletter</div>
            <div className="flex gap-2">
              <input
                type="email"
                name=""
                id=""
                placeholder="Type your email"
                className="rounded-md px-4"
              />
              <button className="bg-orange-500 px-3 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div> */}
          {/* <div className="w-1/5 ">
            <div className="font-semibold text-2xl">Company</div>
            <div className="py-4">About Us</div>
            <div className="pb-4">Pricing</div>
            <div className="pb-4">Career</div>
            <div className="pb-4">Contact Us</div>
          </div>
          <div className="w-1/5">
            <div className="font-semibold text-2xl">Support</div>
            <div className="py-4">Help</div>
            <div className="pb-4">Service</div>
            <div className="pb-4">News & Blog</div>
            <div className="pb-4">FAQ</div>
          </div>
          <div className="w-1/5">
            <div className="font-semibold text-2xl">Get In Touch</div>
            <div className="flex justify-between py-8">
              <div className="hover:text-orange-500 text-3xl">
                <FaXTwitter />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                <FaFacebookF />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                <TbBrandGithubFilled />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
          </div> */}
        </div>

        <hr className="my-6 bg-white h-[0.10rem] w-full" />

        <div className="flex justify-between gap-8">
          <div className="flex-2">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="py-4 text-sm text-center pr-4">
              Make your complicated finance more simple.
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Finsy</div>
            <div className="text-gray-500 py-3 text-lg">Payment</div>
            <div className="text-gray-500 text-lg">Card</div>
            <div className="text-gray-500 py-3 text-lg">Pricing</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Products</div>
            <div className="text-gray-500 py-3 text-lg">Personal</div>
            <div className="text-gray-500 text-lg">Business</div>
            <div className="text-gray-500 py-3 text-lg">Invoice</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Company</div>
            <div className="text-gray-500 py-3 text-lg">About</div>
            <div className="text-gray-500 text-lg">Careers</div>
            <div className="text-gray-500 py-3 text-lg">Press Kit</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Developer</div>
            <div className="text-gray-500 py-3 text-lg">API Documentation</div>
            <div className="text-gray-500 text-lg">Guide</div>
            <div className="text-gray-500 py-3 text-lg">Change Log</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Community</div>
            <div className="text-gray-500 py-3 text-lg">Refer a Friend</div>
            <div className="text-gray-500 text-lg">Gift</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Support</div>
            <div className="text-gray-500 py-3 text-lg">Help</div>
            <div className="text-gray-500 text-lg">FAQ</div>
            <div className="text-gray-500 py-3 text-lg">Contact</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Legal</div>
            <div className="text-gray-500 py-3 text-lg">Privacy Policy</div>
            <div className="text-gray-500 text-lg">Term of Service</div>
            <div className="text-gray-500 py-3 text-lg">Cookies</div>
          </div>
        </div>

        {/* <hr className="my-6 bg-white h-[0.10rem] w-full" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <div>Terms of Use</div>
            <div>Cookies Policy</div>
            <div>Privacy Policy </div>
          </div>
          <div className="">Copyright Xode 2024. All Right Reserved</div>
        </div> */}
      </div>

      <div className="flex px-24 justify-between py-8">
        <div>© 2023 Finsy. All right reserved.</div>
        <div className="flex justify-between gap-4">
              <div className="text-2xl">
                <FaXTwitter />
              </div>
              <div className="text-2xl">
                <FaFacebookF />
              </div>
              <div className="text-2xl">
                <TbBrandGithubFilled />
              </div>
              <div className="text-2xl">
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
      </div>
    </>
  );
}
export default Footer;
