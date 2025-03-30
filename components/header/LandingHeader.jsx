'use client';
import React, { useState, useEffect } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import useLanguageStore from "@/lib/zustand/useLanguageStore";
import { Button } from "../ui/button";
import langData from "@/lib/lang";
import MenuItem from "./MenuItem";
import LanguageMenu from "./LanguageMenu";
import LoginButton from "./LoginButton";
import useUserStore from "@/lib/zustand/useUserStore";
import AvatarButton from "./AvatarButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { lang, setLang } = useLanguageStore();
  const { isLogin } = useUserStore((state) => state);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".lang-menu")) setIsLangMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        const { offsetTop, offsetHeight, id } = section;
        if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex lg:grid lg:grid-cols-[1fr,auto,1fr] items-center w-full border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack p-4 lg:py-2 ld:px-8 justify-between">
      <h1 className="uppercase font-extrabold text-xl lg:text-2xl text-mtext">
        berj<span className="text-main">uang</span>
      </h1>
      <nav className={`absolute lg:static top-full ${isMenuOpen ? "left-0 opacity-100" : "left-[-100%] opacity-0"} lg:opacity-100 bg-white dark:bg-secondaryBlack border-t-4 lg:border-none border-border dark:border-darkNavBorder transition-all duration-300 w-full`}>
        <ul className="flex flex-col lg:flex-row">
          {["home", "features", "benefits", "team"].map((section) => (
            <MenuItem key={section} href={`#${section}`} isActive={activeSection === section}>
              {langData[lang].navbarLandingPage[section]}
            </MenuItem>
          ))}
          {!isLogin && (
            <li className="lg:hidden border-b-2 border-mtext flex justify-center px-4 py-3">
              <LoginButton />
            </li>
          )}
        </ul>
      </nav>
      <div className="flex justify-end gap-5">
        <div className="lang-menu">
          <LanguageMenu isOpen={isLangMenuOpen} toggle={() => setIsLangMenuOpen(!isLangMenuOpen)} setLang={setLang} />
        </div>
        {!isLogin ? (
          <div className="hidden lg:block">
            <LoginButton />
          </div>
        ) : <AvatarButton />}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full bg-white w-10 lg:hidden transition-all duration-300"
          style={{ transform: isMenuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
        >
          {isMenuOpen ? <FaX /> : <FaBars />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
