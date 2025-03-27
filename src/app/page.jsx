'use client'; // Ensure this is a client component

import React, { useState, useEffect ,useRef} from "react";
import Image from "next/image";
import Eye from "./component/eye/page";
import Nav from "./component/nav/page";
import InfiniteScroll from "./component/InfiniteScroll/page";
import logo from "./images/adamlogo.png"
import hand from "./images/handd.svg"
import ps from "./images/ps.svg"
import ai from "./images/ai.svg"
import tlat from "./images/tlat.svg"
import figma from "./images/figma.svg"
import card1 from "./images/card1.svg"
import card2 from "./images/card2.svg"
import card3 from "./images/card3.svg"
import figma2 from "./images/fi.svg"
import iss from "./images/iss.svg"
import ad from "./images/ad.svg"
import logo2 from "./images/adam2.svg"
import Card from "./component/card/page";
import Portfolio from "./component/portfoilo/page";
import Footer from "./component/footer/page";
import Contact from "./component/contact/page";
export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the component is visible
        }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };
  return (
    <div className="bg-white z-20">
   <div className="w-full aspect-[91/50] bg-bgp bg-cover bg-no-repeat">
  <Nav click={openPopup} />
  {popup && (
    <div className="fixed w-full h-full inset-0 flex justify-center items-center bg-white bg-opacity-50 z-[1000]">
      <div className="relative w-full max-w-[600px] bg-white p-6 rounded-lg shadow-lg">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
        >
          X
        </button>
        <Contact />
      </div>
    </div>
  )}
  <section className="w-full h-full flex flex-col  justify-center items-center">
    <div className="w-full pt-5 flex justify-center items-center">
      <Image src={logo} alt="logo" priority className="max-[800px]:w-[10%]" />
    </div>
    <div className="w-full h-[500px] flex justify-end pr-6 items-center text-center max-[800px]:justify-center">
      <h1 className="w-[33%] text-white text-[48px] max-[600px]:text-[24px] font-extrabold   animate-slide-in max-[800px]:w-[80%]  ">
        Hello, I’m Adam UX UI Designer
      </h1>
      <Image src={hand} alt="icon" priority className="max-[600px]:w-[10%]" />
    </div>
    <div className="w-full flex items-end max-[600px]:hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2 flex justify-start pl-5 items-center">
          <div className="w-[33%] flex justify-center items-center pb-15 animate-bounce">
            <Image src={ps} alt="ps icon" priority />
          </div>
          <div className="w-[33%] flex justify-center items-center pt-15 animate-bounce">
            <Image src={ai} alt="ps icon" priority />
          </div>
        </div>
        <div className="w-1/2 flex justify-end pr-5 items-center">
          <div className="w-[33%] flex justify-center items-center pt-15 animate-bounce">
            <Image src={tlat} alt="ps icon" priority />
          </div>
          <div className="w-[33%] flex justify-center items-center pb-15 animate-bounce">
            <Image src={figma} alt="ps icon" priority />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      <div className="w-full h-max pb-6 flex justify-center items-center  ">
            <div className="w-[30%] h-max max-[800px]:w-full  animate-slide-in ">
              <h1 className="w-full text-[48px] font-normal text-[#A3A3A3] text-center">service</h1>
              <h2 className="w-full h-max text-[48px] font-bold text-[#90D9EF] text-center">What i do</h2>
            </div>
              <div className="w-[50%] h-max flex max-[800px]:hidden  justify-center items-center border-t-white border-t-[32px] rounded-[40px] mb-[30px]"> 
                  <Eye/>
              </div>
              <div className="w-[30%] h-max flex  justify-center items-center max-[800px]:hidden "> 
                  
              </div>
      </div>

       <div className="w-full h-max pb-8 pt-8  flex gap-10  justify-center items-center  flex-wrap">
  
       <div className="w-[24%] h-max pb-10 shadow-[2px_2px_19px_#B7DDEEB5] z-50  rounded-[20px] bg-white flex flex-col justify-center items-center  transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:z-10 hover:shadow-[2px_2px_25px_#B7DDEEB5] max-[800px]:w-[90%]">
  <div className="w-full h-[304px] flex justify-center items-center">
    <Image src={card1} alt="card icon 1" priority/>
  </div>
  <div className="w-full h-max text-center">
    <h1 className="w-full h-max text-[20px] font-semibold text-[#90D9EF]">Logo Design</h1>
  </div>
  <div className="w-full h-max text-center">
    <p className="w-full h-max text-[16px] font-normal text-[#B4B4B4]">
      Soluta amet fugit quae laudantium expedita commodi eum exercitationem. A sit quaerat eos laudantium. Odit voluptas occaecati reiciendis.
    </p>
  </div>
</div>

<div className="w-[24%] h-max pb-10 shadow-[2px_2px_19px_#B7DDEEB5] z-50 rounded-[20px] bg-white flex flex-col justify-center items-center  transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:z-10 hover:shadow-[2px_2px_25px_#B7DDEEB5] max-[800px]:w-[90%]">
  <div className="w-full h-[304px] flex justify-center items-center">
    <Image src={card2} alt="card icon 2" priority/>
  </div>
  <div className="w-full h-max text-center">
    <h1 className="w-full h-max text-[20px] font-semibold text-[#90D9EF]">Mobile App Design</h1>
  </div>
  <div className="w-full h-max text-center">
    <p className="w-full h-max text-[16px] font-normal text-[#B4B4B4]">
      Soluta amet fugit quae laudantium expedita commodi eum exercitationem. A sit quaerat eos laudantium. Odit voluptas occaecati reiciendis.
    </p>
  </div>
</div>

<div className="w-[24%] h-max pb-10 shadow-[2px_2px_19px_#B7DDEEB5] z-50 rounded-[20px] bg-white flex flex-col justify-center items-center  transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:z-10 hover:shadow-[2px_2px_25px_#B7DDEEB5] max-[800px]:w-[90%]">
  <div className="w-full h-[304px] flex justify-center items-center">
    <Image src={card3} alt="card icon 3" priority/>
  </div>
  <div className="w-full h-max text-center">
    <h1 className="w-full h-max text-[20px] font-semibold text-[#90D9EF]">Website Design</h1>
  </div>
  <div className="w-full h-max text-center">
    <p className="w-full h-max text-[16px] font-normal text-[#B4B4B4]">
      Soluta amet fugit quae laudantium expedita commodi eum exercitationem. A sit quaerat eos laudantium. Odit voluptas occaecati reiciendis.
    </p>
  </div>
</div>
</div>
<div id="aboutme" ref={cardRef} className={`w-full h-max pb-5  flex justify-center items-center flex-wrap ${ isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'  }`}>
        <div className="w-1/2 h-max pb-6 pt-5 flex justify-center items-center max-[800px]:w-[90%]" >
          <div className="w-[80%] h-max flex flex-col gap-10 justify-center items-center">
          <h1 className="w-full h-max text-[36px]  font-semibold text-[#90D9EF]">About me</h1>
            <p className="w-full h-max text-[20px] font-medium  text-black">Hi l'm <span className="font-black">Adam</span>, A UX UI Designer with <span className="font-black">1+ years of experience</span> from Egypt based in Cairo.
I have worked on impactful projects  which helped a lot of businesses reach it's goal and user's reach their needs, some of the projects that I have worked on are
: CRM , Mobile apps, Dashboard, Marketplaces, platforms, and so much more.</p>
          </div>
        </div>
        <div className="w-1/2 h-max pb-5 pt-5 flex justify-end items-center max-[800px]:w-[100%]" >
              <div className="w-[90%] h-max pb-6 flex justify-center items-center rounded-tl-[60px] rounded-bl-[60px] bg-[#90D9EF]">
                      <div className="w-1/2 h-max flex flex-col gap-5 justify-center items-center  rounded-tl-[60px] rounded-bl-[60px] text-center">
                              <h1 className="w-full h-max text-[35px] max-[600px]:text-[26px] font-bold text-white">skills</h1>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Prototyping</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Wireframing</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">User Flow</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">User Research</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">User interviews</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">User interface</h2>
                      </div>
                      <div className="w-1/2 h-max pt-10 flex flex-col gap-5 justify-center items-center  text-center">
                              <h1 className="w-full h-max text-[35px] max-[600px]:text-[26px] font-bold text-white">Soft skills</h1>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Problem-Solving</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Wireframing</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Communication </h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Creative Thinking</h2>
                              <h2 className="w-full h-max text-[22px] max-[600px]:text-[16px] text-white  font-normal">Collaboration</h2>
                              <hr />
                              <div className="w-full h-max flex gap-5 pb-5 justify-center items-center">
                                <Image src={figma2} alt="figma icon" priority/>
                                <Image src={iss} alt="iss icon" priority/>
                                <Image src={ad} alt="ad icon" priority/>

                              </div>
                      </div>
                      </div>
        </div>
</div>
  <div>
    <InfiniteScroll/>
  </div>
  <section className="w-full h-max  flex justify-center items-start flex-col">
              <div className="w-full h-max pb-5 pt-5  flex justify-center items-center flex-col">
                    <Image src={logo2} alt="logo 2" priority />
                    <h1 className="w-full h-max text-[#90D9EF] text-[48px] font-semibold text-center">Portfolio</h1>
              </div>
              <Portfolio/>
              <Footer/>

  </section>


  
       
    </div>
  );
}


