import React, { useEffect } from "react";
import Header from "../Header";

import explain from "../../assets/vectors/explain.svg";
import hero from "../../assets/vectors/hero.svg";
import marketAssess from "../../assets/vectors/marketAssess.svg";
import virtual from "../../assets/vectors/virtual.svg";
import advt from "../../assets/vectors/advt.svg";
import shape1 from "../../assets/vectors/shape1.svg";
import shapeBlue from "../../assets/vectors/shapeBlue.svg";
import clientInfo from "../../assets/vectors/clientInfo.svg";

// images
import lady from "../../assets/images/lady.png";
import book from "../../assets/images/book.png";
import students from "../../assets/images/students.png";
import unity from "../../assets/images/unity.png";
import Footer from "./Footer";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

const Home = () => {
  const width = window.innerWidth;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    if (width > 375) {
      gsap.set(".heroContent", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".heroContent", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        // scrollTrigger: {
        //   trigger: ".heroContainer",
        //   toggleActions: "resume pause restart none",
        // },
      });

      gsap.set(".heroImage", {
        x: 500,
        opacity: 0,
      });

      gsap.to(".heroImage", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
      });

      gsap.set(".section1Image", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".section1Image", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".heroContainer",
          start: "top top",
          end: "bottom bottom",
          // markers: true,
          scrub: 2,
        },
      });

      gsap.set(".section1Content", {
        x: 500,
        opacity: 0,
      });

      gsap.to(".section1Content", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".heroContainer",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section2Title", {
        y: 100,
        opacity: 0,
      });

      gsap.to(".section2Title", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section1Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".titlePhone", {
        x: -100,
        opacity: 0,
      });

      gsap.to(".titlePhone", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section1Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section2Cards", {
        y: 500,
        opacity: 0,
      });

      gsap.to(".section2Cards", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".section1Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section3Title", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".section3Title", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section2Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section3Cards", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".section3Cards", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section2Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section4Content", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".section4Content", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section3Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".section4Image", {
        x: 500,
        opacity: 0,
      });

      gsap.to(".section4Image", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section3Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.set(".blogs", {
        x: -500,
        opacity: 0,
      });

      gsap.to(".blogs", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section4Container",
          start: "center top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    }
  }, [width]);

  return (
    <React.Fragment>
      <Header />
      <div className="lg:px-20 px-5">
        {/* hero */}
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 heroContainer">
          <div className="content flex flex-col gap-2 lg:w-[600px] heroContent">
            <p className="text-base heroContent">To Consider For</p>
            <p className="text-[#F7A32D] lg:text-7xl text-4xl font-medium heroContent">
              Ignite Your
            </p>
            <p className="lg:text-7xl text-4xl font-medium heroContent">
              {" "}
              Marketing Agency
            </p>
            <p className="text-xl heroContent">
              Lorem ipsum dolor sit amet consectetur. Mauris imperdiet pharetra
              proin felis nulla adipiscing va estibulum. Lorem quhhm sagittis
              aliquam purus.
            </p>
          </div>
          <div className="heroImage">
            <img src={hero} alt="" className="lg:w-[500px] lg:h-[500px]" />
          </div>
        </div>
        {/* section1 */}
        <div className="lg:mt-20 mt-10 section1Container">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5">
            <img
              src={explain}
              alt=""
              className="lg:w-[500px] lg:h-[500px] section1Image"
            />
            <div className="flex flex-col gap-2 lg:w-[500px] section1Content">
              <p className="lg:text-4xl text-3xl font-medium section1Content">
                What we are{" "}
              </p>
              <p className="lg:text-4xl text-3xl font-medium section1Content">
                building gradually?
              </p>
              <p className="text-base section1Content">
                Lorem ipsum dolor sit amet consectetur. Mauris imperdiet
                pharetra proin felis nulla adipiscing va estibulum.
              </p>
              <p className="text-base section1Content">
                Lorem ipsum dolor sit amet consectetur. Mauris imperdiet
                pharetra.
              </p>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="lg:mt-20 mt-10 section2Container">
          <div className="flex flex-col justify-center items-center gap-2 lg:w-[550px] text-center m-auto">
            <div className="lg:text-4xl text-2xl font-medium lg:flex hidden">
              {"Experience our exceptional client services &"
                .split(" ")
                .map((item) => (
                  <p className="section2Title">{item}&nbsp;</p>
                ))}
            </div>
            <div className="lg:text-4xl text-2xl font-medium lg:flex hidden">
              {"explore a selection of our offerings."
                .split(" ")
                .map((item) => (
                  <p className="section2Title">{item}&nbsp;</p>
                ))}
            </div>
            <p className="lg:text-4xl text-2xl font-medium lg:hidden block titlePhone">
              Experience our exceptional client services & explore a selection
              of our offerings.
            </p>
          </div>

          <div className="lg:mt-20 mt-10">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 ">
              {/* section2Cards */}
              <div className="flex flex-col justify-center items-center bg-[#E9E9EC] w-[300px] p-10 text-center h-[350px] section2Cards">
                <img src={marketAssess} alt="" />
                <p className="text-xl font-medium section2Cards">
                  Market Assessment
                </p>
                <p className="text-base text-[#808080] section2Cards">
                  Lorem ipsum dolor sit a consectetur.Maurisimpe pharetra proin
                  felis.
                </p>
              </div>
              {/* section2Cards */}
              <div className="flex  flex-col justify-center items-center bg-[#1E2B57] w-[300px] p-10 text-center h-[350px] text-white relative lg:top-[-50px] section2Cards">
                <img src={virtual} alt="" />
                <p className="text-xl font-medium section2Cards">
                  Virtual initiative
                </p>
                <p className="text-base text-white section2Cards">
                  Lorem ipsum dolor sit a consectetur.Maurisimpe pharetra proin
                  felis.
                </p>
              </div>
              {/* section2Cards */}
              <div className="flex flex-col justify-center items-center bg-[#E9E9EC] w-[300px] p-10 text-center h-[350px] section2Cards">
                <img src={advt} alt="" />
                <p className="text-xl font-medium section2Cards">
                  Online advertising
                </p>
                <p className="text-base text-[#808080] section2Cards">
                  Lorem ipsum dolor sit a consectetur.Maurisimpe pharetra proin
                  felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="lg:mt-40 mt-10 section3Container">
          <div className="flex flex-col justify-center items-center gap-2 lg:w-[550px] text-center m-auto">
            <p className="lg:text-4xl text-2xl font-medium section3Title">
              Outstanding client contributions. Discover our notable
              achievements.
            </p>
          </div>

          <div className="lg:mt-20 mt-10">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
              {/* section3Cards */}
              <div className="flex flex-col justify-center items-start bg-[#E9E9EC] w-[300px] p-10 text-start h-[390px] relative section3Cards">
                <p className="text-4xl font-medium section3Cards">103</p>
                <p className="text-xl font-medium section3Cards">
                  Projects
                  <br />
                  Completed
                </p>
                <div className="absolute top-0 left-0">
                  <img src={shape1} alt="" />
                </div>
              </div>
              {/* section3Cards */}
              <div className="flex flex-col justify-center items-start bg-[#F7A22D] w-[300px] p-10 text-start h-[390px] relative section3Cards text-white">
                <p className="text-4xl font-medium section3Cards">105</p>
                <p className="text-xl font-medium section3Cards">
                  Win
                  <br />
                  Awards
                </p>
                <div className="absolute top-0 left-0 ">
                  <img src={shapeBlue} alt="" />
                </div>
              </div>
              {/* section3Cards */}
              <div className="flex flex-col justify-center items-start bg-[#E9E9EC] w-[300px] p-10 text-start h-[390px] relative section3Cards">
                <p className="text-4xl font-medium section3Cards">360</p>
                <p className="text-xl font-medium section3Cards">
                  Projects
                  <br />
                  Completed
                </p>
                <div className="absolute top-0 left-0">
                  <img src={shape1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="lg:mt-40 mt-10 flex flex-col justify-center items-center section4Container">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
            <div className="flex flex-col gap-5 section4Content">
              <p className="lg:text-4xl text-2xl font-medium section4Content">
                What clients says about us?
              </p>
              <p className="lg:text-lg text-base section4Content">
                Lorem ipsum dolor sit amet consectetur. imperdiet pharetra proin
                felis nulla adipi estibulum. Lorem quhhm sagittis aliqua.
              </p>
              <p className="lg:text-lg text-base section4Content">
                Lorem ipsum dolor sit amet consectetur. imperdiet pharetra proin
                felis nulla adipi estibulum. Lorem quhhm sagittis aliqua.
              </p>
            </div>
            <img src={clientInfo} alt="" className="section4Image" />
          </div>
        </div>
        {/* blogs */}
        <div className="lg:mt-40 mt-10 flex flex-col justify-center items-center blogsContainer">
          <div className="text-center blogs">
            <p className="text-[#F7A22D] lg:text-xl text-lg font-medium blogs">
              Our Blogs
            </p>
            <p className="lg:text-5xl text-2xl font-medium blogs">
              Our Latest Media
            </p>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:mt-20 mt-10">
            <div className="lg:w-[200px] w-full lg:h-[490px] flex flex-col bg-[#E9E9EC] blogs justify-center items-center">
              <div className="p-5 flex flex-col">
                <p className="text-base font-medium">Start your business</p>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor consectetur.Mauris pharetra proin.
                </p>
              </div>
              <img src={lady} alt="" />
              <div className="p-5 flex flex-col">
                <p className="text-base font-medium">A great Student</p>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor consectetur.Mauris pharetra proin.
                </p>
              </div>
            </div>

            <div className="lg:w-[400px] w-full lg:h-[490px] flex flex-col bg-[#E9E9EC] blogs lg:justify-center lg:items-center">
              <div>
                <img src={book} alt="" />
              </div>
              <div className="p-5 flex flex-col lg:w-[240px]">
                <p className="text-base font-medium text-center">
                  What is Digital Marketting
                </p>
                <p className="text-base font-medium text-center">
                  Visual Summary
                </p>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor consectetur.Mauris pharetra proin.
                </p>
              </div>
            </div>

            <div className="lg:w-[200px] w-full lg:h-[490px] flex flex-col bg-[#E9E9EC] blogs">
              <img src={students} alt="" />
              <div className="p-5 flex flex-col">
                <p className="text-base font-medium">Become a good man</p>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor consectetur.Mauris pharetra proin.
                </p>
              </div>
              <img src={unity} alt="" />
              <div className="p-5 flex flex-col">
                <p className="text-base font-medium">Become a good man</p>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor consectetur.Mauris pharetra proin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
