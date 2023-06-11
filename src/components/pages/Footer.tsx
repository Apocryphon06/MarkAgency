// import gsap from "gsap";
import React from "react";
import sendIcon from "../../assets/vectors/sendIcon.svg";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

const Footer = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  //   gsap.set(".footerItems", {
  //     x: -100,
  //     opacity: 0,
  //   });

  //   gsap.to(".footerItems", {
  //     x: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: ".blogsContainer",
  //       // markers: true,
  //       // start: "bottom top",
  //       // end: "bottom bottom",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  return (
    <React.Fragment>
      <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col justify-center items-start gap-10 bg-[#1E2B57] text-white lg:p-10 p-5 footer">
        <div className="flex flex-col gap-2 w-[200px] footerItems">
          <p className="text-base font-medium footerItems">MarkAgency</p>
          <p className="text-base font-light footerItems">2099 New york</p>
          <p className="text-base font-light footerItems">
            Lorem ipsum dolor consectetur.Mauris pharetra proin.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:w-[200px] footerItems">
          <p className="text-base font-medium footerItems">My Account</p>
          {["Terms & Conditions", "Information", "Account"].map((item) => (
            <p className="text-base font-light footerItems">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 lg:w-[200px] footerItems">
          <p className="text-base font-medium footerItems">Top Link</p>
          {["About", "Services", "Contact", "Blog"].map((item) => (
            <p className="text-base font-light footerItems">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 lg:w-[200px] footerItems">
          <p className="text-base font-medium footerItems">Subscribe</p>
          <div className="flex items-center footerItems">
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
