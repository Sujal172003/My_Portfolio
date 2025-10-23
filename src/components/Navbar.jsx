import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const Navlink = ({ scrollToSection, refs, activeSection, onLinkClick }) => {
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } = refs;

  const getButtonClass = (section) =>
    `px-4 py-2 rounded-md transition-all ${
      activeSection === section
        ? "bg-gradient-to-r from-[#49dafe] to-[#41abeed5] text-white font-semibold"
        : "text-gray-300 hover:text-white hover:bg-gradient-to-r from-[#1b63ff99]/[60%] to-[#7809ff99]/[60%] hover:shadow-[0_0_30px_5px_rgba(37,99,235,0.6)]"
    }`;

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <button
        onClick={() => {
          scrollToSection(homeRef);
          onLinkClick?.();
        }}
        className={`${getButtonClass("home")} `}
      >
        Home
      </button>
      <button
        onClick={() => {
          scrollToSection(aboutRef);
          onLinkClick?.();
        }}
        className={getButtonClass("about")}
      >
        About
      </button>
      <button
        onClick={() => {
          scrollToSection(skillsRef);
          onLinkClick?.();
        }}
        className={getButtonClass("skills")}
      >
        Skills
      </button>
      <button
        onClick={() => {
          scrollToSection(projectsRef);
          onLinkClick?.();
        }}
        className={getButtonClass("projects")}
      >
        Projects
      </button>
      <button
        onClick={() => {
          scrollToSection(contactRef);
          onLinkClick?.();
        }}
        className={getButtonClass("contact")}
      >
        Contact
      </button>
    </div>
  );
};

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-[70px] border-b border-b-[#2984a5d3] bg-[#000000] justify-between items-center px-6 py-3">
      {/* Logo */}
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#37d0ff] via-[#e23cff] to-[#fe29a9]">Sujal</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between w-[70%] items-center">
        <Navlink
          scrollToSection={scrollToSection}
          refs={refs}
          activeSection={activeSection}
        />
               <div className="flex flex-row justify-center items-center mr-10 gap-3 text-[12px] text-[#5e575b]"><div className="w-3 h-3 bg-[#34c040e7] rounded-2xl glow-circle"></div>STATUS : <div className="text-[#37d0ff]">READY</div></div>
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

      {/* Mobile Menu Button */}
      <div className="md:hidden block z-50 cursor-pointer">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-7 h-7 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-7 h-7 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#15537f] backdrop-blur-lg z-40 p-6 md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <Navlink
          scrollToSection={scrollToSection}
          refs={refs}
          activeSection={activeSection}
          onLinkClick={() => setMobileMenuOpen(false)}
        />
      </div>
      
    </div>
  );
};

export default Navbar;
