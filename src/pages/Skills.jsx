import React, { useEffect, useRef } from "react";
import {
  FiCpu,
  FiDatabase,
  FiTablet,
  FiChevronLeft,
  FiChevronRight,
  FiZap,
} from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const maindiv = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  useEffect(() => {
        const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: maindiv.current,
        start: "top 70%", // triggers right away when page scrolls even a little
        end: "bottom 105%",
        toggleActions: "play reverse play reverse",
        scrub: true, // disables scroll-based syncing
      },
    });
        tl3.fromTo(
      div1Ref.current,
      { y:600, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
            tl3.fromTo(
      div2Ref.current,
      {y: 600, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
            tl3.fromTo(
      div3Ref.current,
      { y: 600, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    return () => {
      tl3.scrollTrigger?.kill();
    };
  }, []);


  return (
    <div className="flex flex-col w-screen h-[1000px] sm:h-[600px] gap-6 items-center mt-14 sm:mt-0 sm:pt-3">
      {/* first fiv */}
      <div className="w-full h-[16%] text-[32px] sm:text-[58px] font-bold flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">
        SKILLS & EXPERTISE
      </div>
      {/* second div */}
      <div ref={maindiv} className=" w-[90%] items-center pl-4 sm:pl-6 gap-3 grid sm:grid-cols-3 h-[100%] sm:h-[100%]">
        {/* secon1d 1 */}
        <div ref={div1Ref} className="group transition-all hover:border-[#00eefff4] w-[95%] h-[100%] sm:h-[75%] border-1 rounded-xl pl-3 pt-3 flex flex-col gap-5 border-[#00eeff6f]">
          <div className="group-hover:text-[#00eefff4] flex flex-row gap-2 items-center text-xl sm:text-2xl">
            <div className="flex justify-center items-center rounded-xl w-[45px] h-[45px] bg-gradient-to-r from-[#00eeff] to-[#0379ff] ">
              <FiChevronLeft size={25} color="white" />
              <FiChevronRight size={25} color="white" />
            </div>
            Frontend Development
          </div>
          <div className="flex flex-col h-[40%] pt-4 pl-3 gap-2">
            <p>⚛️ React</p>
            <p>🧩 JavaScript</p>
            <p>🎨 Tailwind CSS </p>
            <p>📱 Flutter</p>
          </div>
        </div>
        {/* secon1d 2 */}
                <div ref={div2Ref} className="group transition-all hover:border-[#00eefff4] w-[95%] h-[100%] sm:h-[75%] border-1 rounded-xl pl-3 pt-3 flex flex-col gap-5 border-[#00eeff6f]">
          <div className="group-hover:text-[#00eefff4] flex flex-row gap-2 items-center text-xl sm:text-2xl">
            <div className="flex justify-center items-center rounded-xl w-[45px] h-[45px] bg-gradient-to-r from-[#00ff6e] to-[#03f2ff]  ">
              <FiDatabase size={25} color="white" />
            </div>
            Backend Development
          </div>
          <div className="flex flex-col h-[40%] pt-4 pl-3 gap-2">
                        <p>☕ Java</p>
            <p>🧩 JDBC</p>
            <p>🔗 Hibernate</p>
            <p>🧱 JPA — 80</p>
          </div>
        </div>

        {/* secon1d 3 */}
                <div ref={div3Ref} className="group transition-all hover:border-[#00eefff4] w-[95%] h-[100%] sm:h-[75%] border-1 rounded-xl pl-3 pt-3 flex flex-col gap-5 border-[#00eeff6f]">
          <div className="group-hover:text-[#00eefff4] flex flex-row gap-2 items-center text-xl sm:text-2xl">
            <div className="flex justify-center items-center rounded-xl w-[45px] h-[45px] bg-gradient-to-r from-[#f700ff] to-[#a703ff]  ">
              <FiDatabase size={25} color="white" />
            </div>
            Database
          </div>
          <div className="flex flex-col h-[40%] pt-4 pl-3 gap-2">
             <p className="flex items-center gap-1"><div className="w-4 h-4 rounded-4xl bg-red-500"></div> Oracle SQL</p>
             <p>🧩 MySQL</p>
          </div>
        </div>
        {/* secon1d 4 */}
        {/* <div className="w-[95%] h-[100%] sm:h-[75%] border-1 rounded-xl pl-3 pt-3 border-[#00eeff6f]">
          <div className="flex flex-row gap-2 items-center text-xl sm:text-2xl">
            <div className="flex justify-center items-center rounded-xl w-[45px] h-[45px] bg-gradient-to-r from-[#00eeff] to-[#0379ff] ">
              <FiChevronLeft size={25} color="white" />
              <FiChevronRight size={25} color="white" />
            </div>
            Frontend Development
          </div>
          <div></div>
        </div> */}
      </div>
      <div className="gap-3 sm:gap-8  flex flex-col">
        <div className="text-xl sm:text-2xl flex font-bold justify-center items-center w-full">Additional Technologies & Tools</div>
        <div className=" w-full grid grid-cols-3 gap-3 pl-0 sm:pl-[190px] sm:grid-cols-9">
        <div className="border-1 border-[#ffffff87] w-[100%] flex justify-center items-center p-3 rounded-xl">JavaScript</div>
        <div className="border-1 border-[#ffffff87] w-[90%] flex justify-center items-center p-3 rounded-xl">Html</div>
        <div className="border-1 border-[#ffffff87] w-[90%] flex justify-center items-center p-3 rounded-xl">CSS</div>
        <div className="border-1 border-[#ffffff87] w-[100%] flex justify-center items-center p-3 rounded-xl">JSP</div>
        <div className="border-1 border-[#ffffff87] w-[100%] flex justify-center items-center rounded-xl">VS Code</div>
        <div className="border-1 border-[#ffffff87] w-[100%] flex justify-center items-center rounded-xl">NetBeans</div>
        <div className="border-1 border-[#ffffff87] w-[100%] flex justify-center items-center rounded-xl p-3">Git Hub</div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
