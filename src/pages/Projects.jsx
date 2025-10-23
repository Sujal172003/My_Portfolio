import React, { useEffect, useRef } from "react";
import { FiChevronRight, FiGithub, FiShare } from "react-icons/fi";
import { projects1, projects2 } from "../assets/project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const div1Ref = useRef([]);
  const div2Ref = useRef([]);

  useEffect(()=>{

    const tl = gsap.timeline({
      scrollTrigger: {
            trigger: div1Ref.current[0],
            start: "top 80%", // triggers right away when page scrolls even a little
            end:"bottom 110%",
            toggleActions: "play none none reverse",
            scrub: true, // disables scroll-based syncing
          },
    })

    div1Ref.current.forEach((el,index)=>{
      if(!el) return;
      tl.fromTo(
        el,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay:1,
          ease: "power3.out",
        },
        index*0.2
      );
    })




    const tl2 = gsap.timeline({
      scrollTrigger: {
            trigger: div2Ref.current[0],
            start: "top 80%", // triggers right away when page scrolls even a little
            end:"bottom 110%",
            toggleActions: "play none none reverse",
            scrub: true, // disables scroll-based syncing
          },
    })
    div2Ref.current.forEach((el,index)=>{
      if(!el) return;
      tl2.fromTo(
        el,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay:1,
          ease: "power3.out",
        },
        index*0.2
      );
    })


  return () => {tl.kill();tl2.kill()};
  },[])


  return (
    <div className="flex flex-col w-screen h-[2350px] sm:h-[1000px] gap-10 sm:gap-10 mt-48 sm:mt-20 justify-center items-center">
      <div className=" text-3xl sm:text-6xl font-bold flex flex-row justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">
        <FiChevronRight className="text-4xl sm:text-6xl" color="#37d0ff" />
        FEATURED_PROJECTS
      </div>
      {/* div1 */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-[95%] h-[1800px] gap-5 sm:h-[60%]">

        {projects1.map((val, key) => {
          return (
            <div
            
              key={key}
              ref={(el) => (div1Ref.current[key] = el)}
              className=" w-[90%] sm:w-[30%] h-[90%] sm:h-[90%] flex flex-col gap-2 items-center rounded-xl border border-[#2984a5d3]"
            >
              <div className="w-[100%] h-[50%] object-fill overflow-hidden rounded-xl">
                <img src={val?.image} alt="" className="w-[1000px] h-[200px]" />
              </div>
              <div className="text-xl w-[90%] sm:text-2xl">{val?.name}</div>
              <div className="w-[90%] h-[40%] leading-8 text-[#bdbdbda3]">
                {val?.title}
              </div>
              <div className="w-[90%] flex flex-row justify-between items-center">
                {val?.launguage?.map((v, k) => (
                  <button
                    className="rounded-xl p-2 bg-[#00c3ff68] text-[#00c3ff]"
                    key={k}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="flex gap w-[20%] justify-center pt-2 items-center gap-3">
                {val?.gitnublink && (
                <a
                  href={val.gitnublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c3ff]"
                >
                  <FiGithub size={22} color="#00c3ff" />
                </a>
              )}
              {val?.livelink && (
                <a
                  href={val.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c3ff]"
                >
                  <FiShare size={22} color="#00c3ff" />
                </a>
              )}
              </div>
            </div>
          );
        })}
      </div>
      {/* div2 */}
      <div className="flex flex-col gap-2 sm:flex-row  justify-evenly items-center w-[95%] h-[90%] sm:h-[60%]">
                {projects2.map((val, key) => {
          return (
            <div
              key={key}
              ref={(el) => (div2Ref.current[key] = el)}
              className=" w-[90%] sm:w-[30%] h-[90%] sm:h-[90%] flex flex-col items-center gap-2 rounded-xl border border-[#2984a5d3]"
            >
              <div className="w-[100%] h-[50%] object-fill overflow-hidden rounded-xl">
                <img src={val?.image} alt="" className="w-[1000px] h-[200px]" />
              </div>
              <div className="text-xl w-[90%] sm:text-2xl">{val?.name}</div>
              <div className="w-[90%] h-[40%] leading-8 text-[#bdbdbda3]">
                {val?.title}
              </div>
              <div className="w-[90%] flex flex-row justify-between items-center">
                {val?.launguage?.map((v, k) => (
                  <button
                    className="rounded-xl p-2 bg-[#00c3ff68] text-[#00c3ff]"
                    key={k}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="flex w-[20%] justify-center gap-3">
                {val?.gitnublink && (
                <a
                  href={val.gitnublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c3ff]"
                >
                  <FiGithub size={20} color="#00c3ff" />
                </a>
              )}
                {val?.livelink && (
                <a
                  href={val.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c3ff]"
                >
                  <FiShare size={20} color="#00c3ff" />
                </a>
              )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
