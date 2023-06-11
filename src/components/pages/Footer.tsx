import React from "react";
import sendIcon from "../../assets/vectors/sendIcon.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col justify-center items-start lg:gap-10 gap-5 bg-[#1E2B57] text-white lg:p-10 p-5">
        <div className="flex flex-col gap-2 w-[200px]">
          <p className="text-base font-medium">MarkAgency</p>
          <p className="text-base font-light">2099 New york</p>
          <p className="text-base font-light">
            Lorem ipsum dolor consectetur.Mauris pharetra proin.
          </p>
        </div>
            
        <div className="flex flex-col gap-2 lg:w-[200px]">
          <p className="text-base font-medium">My Account</p>
          {["Terms & Conditions", "Information", "Account"].map((item) => (
            <p className="text-base font-light">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 lg:w-[200px]">
          <p className="text-base font-medium">Top Link</p>
          {["About", "Services", "Contact", "Blog"].map((item) => (
            <p className="text-base font-light">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 lg:w-[200px]">
          <p className="text-base font-medium">Subscribe</p>
          <div className="flex items-center">
            <input
              className="p-[9px] w-full outline-none text-black"
              placeholder="Enter Email"
            />
            <div className="bg-[#4266E8] p-2 cursor-pointer">
              <img src={sendIcon} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121E48] p-5 w-full text-white text-center">
        <p>Copy rights @2023 by</p>
        <p>MarkAgency</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
