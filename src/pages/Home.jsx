import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiDownload } from "react-icons/fi";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ scrollToSection, projectsRef }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    gsap.fromTo(
      left,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: left,
          start: "top 98%",
          toggleActions: "play none none reverse",
          scrub: false, 
        },
      }
    );

    gsap.fromTo(
      right,
      { x: 200, opacity: 0 },
      {
        x: 0,
        delay: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: right,
          start: "top 98%", // triggers right away when page scrolls even a little
          toggleActions: "play none none reverse",
          scrub: false, // disables scroll-based syncing
        },
      }
    );

    return () => ScrollTrigger.killAll();
  }, []);

  const texts = ["Full Stack Developer", "Java Developer"];
  const [indexs, setindex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/SujalGupta.pdf"; // no import needed
  link.setAttribute("download", "SujalGuptaCV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  return (
    <div className="flex flex-col sm:flex-row mt-[100px] justify-center items-center sm:mt-0 sm:justify-end w-screen h-[140vh] ">
      <div
        ref={leftRef}
        className="flex flex-col w-[100%]  pt-[80px] sm:pt-[40px] items-center sm:w-[70%] sm:items-start sm:pl-6 pl-0 gap-6 "
      >
        <p className="text-[#37d0ff]">{`> HELLO WORLD.EXECUTE()`}</p>
        <div className="flex flex-col w-[300px] gap-0 items-center justify-center sm:w-full sm:items-start sm:flex-col">
          <div className="font-bold text-[50px] sm:text-[63px]">Hi, I'm</div>
          <div className="font-bold text-[50px] sm:text-[63px] text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">
            Sujal Gupta
          </div>
        </div>
        <h2 className=" text-2xl flex gap-3">
          i am a <div className="text-[#37d0ff]">{texts[indexs]}</div>
        </h2>
        <p className="sm:w-[80%] sm:pr-[60px] w-[75%] leading-7 text-center sm:text-start text-xl text-[#ffffff75]">
          Passionate about creating innovative solutions with modern
          technologies. Specialized in full-stack development and Java
          Developement.
        </p>

        <div className="flex flex-col w-full sm:w-max sm:flex-row justify-center items-center gap-6 ml-0 sm:ml-20 mt-4">
          <button onClick={() => scrollToSection(projectsRef)} className="w-[80%] h-[60px] sm:w-[170px] sm:h-[60px] bg-gradient-to-r from-[#37d0ff] to-[#e229fe] text-white font-semibold px-4 py-2 rounded-xl transition-colors duration-300">
            View My Work
          </button>
          <button
            onClick={handleDownload}
            className="w-[80%] h-[60px] bg-transparent flex border gap-2 justify-center items-center sm:w-[170px] sm:h-[60px] border-[#37d0ff] text-[#37d0ff] font-semibold px-4 py-2 rounded-2xl transition-colors duration-300 "
          >
            <FiDownload size={20} />
            Download CV
          </button>
        </div>
        <div className="flex flex-row gap-7">
          <a href="https://github.com/Sujal172003">
            <FiGithub size={30} color="#c0c0c0" />
          </a>
          <a href="https://www.linkedin.com/in/sujal-gupta-598298255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FiLinkedin size={30} color="#c0c0c0" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ssujal172003@gmail.com&su=Hello%20Sujal">
            <FiMail size={30} color="#c0c0c0" />
          </a>
        </div>
      </div>
      <div
        ref={rightRef}
        className="w-[30%] h-[70%] object-fill overflow-hidden mt-[80px] "
      >
        <img src={""} alt="" className="w-fit opacity-0 sm:opacity-100" />
      </div>
    </div>
  );
};

export default Home;
