import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiCpu,
  FiDatabase,
  FiTablet,
  FiChevronLeft,
  FiChevronRight,
  FiZap,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const div1Ref = useRef(null);
  const childD1 = useRef(null);
  const childD2 = useRef(null);
  const childD3 = useRef(null);
  const div21Ref = useRef(null);
  const child211 = useRef(null);
  const child212 = useRef(null);
  const child213 = useRef(null);
  const child214 = useRef(null);
  const div22Ref = useRef(null);

  useEffect(() => {
    // div1Ref gsap animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: div1Ref.current,
        start: "top 80%", // triggers right away when page scrolls even a little
        end: "bottom 130%",
        toggleActions: "play reverse play reverse",
        scrub: true, // disables scroll-based syncing
      },
    });
    tl1.fromTo(
      div1Ref.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    tl1.fromTo(
      childD1.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    tl1.fromTo(
      childD2.current,
      { y: -400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 2,
        ease: "power3.out",
      }
    );
    tl1.fromTo(
      childD3.current,
      { y: -600, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 3,
        ease: "power3.out",
      }
    );
    // div21Ref gsap

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: div21Ref.current,
        start: "top 70%", // triggers right away when page scrolls even a little
        end: "bottom 80%",
        toggleActions: "play reverse play reverse",
        scrub: true, // disables scroll-based syncing
      },
    });
        tl2.fromTo(
      div21Ref.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    tl2.fromTo(
      child211.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
        tl2.fromTo(
      child212.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
        tl2.fromTo(
      child213.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
        tl2.fromTo(
      child214.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );

        const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: div22Ref.current,
        start: "top 80%", // triggers right away when page scrolls even a little
        end: "bottom 105%",
        toggleActions: "play reverse play reverse",
        scrub: true, // disables scroll-based syncing
      },
    });
        tl3.fromTo(
      div22Ref.current,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    return () => {
      tl1.scrollTrigger?.kill();
      tl2.scrollTrigger?.kill();
      tl3.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className=" w-screen sm:h-[130vh] h-[220vh] gap-28 justify-center items-center flex flex-col">
      {/* 1 div */}
      <div className="text-5xl sm:text-6xl font-bold flex text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">
        <div>{`<`}</div>ABOUT_ME{" "}
        <div className="text-transparent bg-clip-text bg-[#37d0ff]">{`/>`}</div>
      </div>

      {/* 2 div */}
      <div className="w-screen h-[210vh] sm:h-screen flex flex-col sm:flex-row justify-between items-center sm:justify-evenly gap-6 sm:gap-0">
        {/* 2/1 div */}
        <div
          ref={div1Ref}
          className="w-[90%] sm:w-[46%] h-[100%] border-2 rounded-xl justify-center flex flex-col items-center gap-7 border-[#37d0ff]"
        >
          <div className="gap-4 flex flex-row items-center justify-start pl-8 w-full text-2xl font-medium">
            <FiCpu size={25} color="#37d0ff" />
            Core Specialties
          </div>
          {/* first div */}
          <div
            ref={childD1}
            className="group flex flex-row gap-4 p-4 border-[#ffffff9c] text-[#ffffff9c] hover:border-[#37d0ff9c] hover:w-[95%] w-[90%] transition-all border-[1px] rounded-[10px]"
          >
            <div className="w-[16%] h-[30%] sm:w-[9%] sm:h-[60%] rounded-xl items-center justify-center flex bg-gradient-to-r to-[#00fbff] from-[#00b7ff] ">
              <FiChevronLeft size={25} />/<FiChevronRight size={25} />
            </div>
            <div className="w-[80%]">
              <div className="text-white group-hover:text-[#37d0ff] transition-colors duration-300 font-bold">
                FRONTEND DEVELOPMENT
              </div>
              <div>
                Building responsive and dynamic interfaces using React,
                JavaScript, HTML, and CSS.
              </div>
            </div>
          </div>
          {/* second div */}
          <div
            ref={childD2}
            className="group flex flex-row gap-4 p-4 border-[#ffffff9c] text-[#ffffff9c] hover:border-[#37d0ff9c] hover:w-[90%] w-[90%] transition-all border-[1px] rounded-[10px]"
          >
            <div className="w-[16%] h-[30%] sm:w-[9%] sm:h-[60%] rounded-xl items-center justify-center flex bg-gradient-to-r to-[#00ff1e] from-[#00ffd9]">
              <FiDatabase size={25} />
            </div>
            <div className="w-[80%]">
              <div className="text-white group-hover:text-[#37d0ff] transition-colors duration-300 font-bold">
                BACKEND dEVELOPMENT
              </div>
              <div>
                Creating RESTful APIs and robust server applications using Java,
                Spring Boot, Hibernate, and SQL with Oracle.
              </div>
            </div>
          </div>
          {/* third div */}
          <div
            ref={childD3}
            className="group flex flex-row gap-4 p-4 border-[#ffffff9c] text-[#ffffff9c] hover:border-[#37d0ff9c] hover:w-[95%] w-[90%] h-[35%] sm:h-max transition-all border-[1px] rounded-[10px]"
          >
            <div className="w-[16%] h-[30%] sm:w-[9%] sm:h-[60%] rounded-xl items-center justify-center flex bg-gradient-to-r to-[#ff00d0] from-[#ff0073]">
              <FiTablet size={25} />
            </div>
            <div className="w-[80%]">
              <div className="text-white group-hover:text-[#37d0ff] transition-colors duration-300 font-bold">
                MOBILE APP DEVELOPMENT
              </div>
              <div>
                Exploring cross-platform mobile app development using Flutter
                and Dart, with a basic understanding of UI design.
              </div>
            </div>
          </div>
        </div>
        {/* 2/2 div */}
        <div
          className="w-[90%] sm:w-[46%] h-[100%] gap-12 flex flex-col"
        >
          <div ref={div21Ref} className="w-full h-[70vh] sm:h-[60%] border-[#37d0ff] border-2 rounded-xl flex flex-col justify-center items-center gap-6">
            <div className="flex items-center font-bold text-xl justify-start w-full pt-3">
              <FiChevronLeft size={20} color="#1aff00" />/
              <FiChevronRight size={20} color="#1aff00" />
              {` Technology Proficiency`}
            </div>
            {/* 1 */}
            <div ref={child211} className="w-[90%] gap-1s flex flex-col">
              <div className="flex justify-between">
                <div>Java</div>
                <div>80%</div>
              </div>
              <div className="w-[100%] h-2 rounded-2xl bg-[#2b6485cf]">
                {" "}
                <div className="w-[80%] h-[100%] bg-blue-500 rounded-2xl"></div>
              </div>
            </div>
            {/* 2 */}
            <div ref={child212} className="w-[90%] gap-1s flex flex-col ">
              <div className="flex justify-between">
                <div>React</div>
                <div>70%</div>
              </div>
              <div className="w-[100%] h-2 rounded-2xl bg-[#2b6485cf]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#66d157] rounded-2xl"></div>
              </div>
            </div>
            {/* 3 */}
            <div ref={child213} className="w-[90%] gap-1s flex flex-col ">
              <div className="flex justify-between">
                <div>SQL</div>
                <div>66%</div>
              </div>
              <div className="w-[100%] h-2 rounded-2xl bg-[#2b6485cf]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#a528cb] rounded-2xl"></div>
              </div>
            </div>
            {/* 4 */}
            <div ref={child214} className="w-[90%] gap-1s flex flex-col ">
              <div className="flex justify-between">
                <div>Hibernate</div>
                <div>60%</div>
              </div>
              <div className="w-[100%] h-2 rounded-2xl bg-[#2b6485cf]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#d8800d] rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div ref={div22Ref} className="w-full h-[30%] gap-5 flex flex-col items-center justify-center sm:h-[30%] border-[#37d0ff] border-2 rounded-xl">
            <div className="w-full flex justify-start text-2xl items-center font-bold gap-2 pl-2">
              <FiZap size={25} color="#ff0080" /> {` Mission Statement`}
            </div>
            <div className="w-[90%] text-[#ffffff99]">
              Pushing the boundaries of technology through innovative solutions
              in AI, quantum computing, and cybersecurity. Every project is an
              opportunity to create something that didn’t exist before.
            </div>
            <div className=" text-[#ffffff75] gap-3 flex flex-row justify-start pl-5 items-center w-full"><div className="w-3 h-3 bg-[#34c040e7] rounded-2xl glow-circle"></div><div className="text-[#00ff15]">Active</div> <FiDatabase size={20} color="#00bbff" /> LEARNING_MODE: ON</div>
          </div>
        </div>
      </div>
<style>{`
  .glow-circle {
    width: 10px;
    height: 10px;
    background-color: #00ff15;
    box-shadow: 0 0 20px #00ff15, 0 0 40px #00ff15;
    border-radius: 50%;
    animation: glow 2s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      background-color: #00ff15;
      box-shadow: 0 0 20px #00ff15, 0 0 40px #00ff15;
    }
    50% {
      background-color: #34c040;
      box-shadow: 0 0 40px #34c040, 0 0 80px #34c040;
    }
  }
`}</style>

    </div>
   
  );
};

export default About;
