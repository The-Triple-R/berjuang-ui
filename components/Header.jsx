'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import GoogleIcon from './icons/google-icon';
import { BsTranslate } from 'react-icons/bs';
import { Card } from './ui/card';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';
import { FaBars, FaX } from 'react-icons/fa6';

const MenuItem = ({ href, children, isActive }) => (
  <li className="flex border-b-2 md:border-none border-black justify-center">
    <a href={href} className={`px-4 py-3 text-lg block ${isActive ? 'text-main' : 'text-mtext'} hover:text-main dark:text-white`}>
      {children}
    </a>
  </li>
);

const LoginButton = () => {
  const { lang } = useLanguageStore();
  return (
    <Button className='bg-white'>
      <GoogleIcon />
      {langData[lang].loginButton}
    </Button>
  );
};

const LanguageMenu = ({ isOpen, toggle, setLang }) => (
  <div className='relative'>
    <Button className='rounded-full bg-white w-10' onClick={toggle}>
      <BsTranslate />
    </Button>
    <ul
      className={`absolute top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 pointer-events-none translate-y-[-10px]'
      }`}
    >
      <Card className='bg-white py-4 flex flex-col shadow-md'>
        {['id', 'en'].map((lng) => (
          <li key={lng} className='px-6 py-2 hover:bg-black hover:text-white'>
            <button className='cursor-pointer text-lg' onClick={() => setLang(lng)}>
              {lng === 'id' ? 'Indonesia' : 'English'}
            </button>
          </li>
        ))}
      </Card>
    </ul>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, setLang } = useLanguageStore();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-menu')) setIsLangMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('section').forEach((section) => {
        const { offsetTop, offsetHeight, id } = section;
        if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex md:grid md:grid-cols-[1fr,auto,1fr] items-center w-full border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack p-4 md:py-2 md:px-8 justify-between">
      <h1 className="uppercase font-extrabold text-xl md:text-2xl text-mtext">
        berj<span className="text-main">uang</span>
      </h1>
      <nav className={`absolute md:static top-full ${isMenuOpen ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'} md:opacity-100 bg-white dark:bg-secondaryBlack border-t-4 md:border-none border-border dark:border-darkNavBorder transition-all duration-300 w-full`}>
        <ul className='flex flex-col md:flex-row'>
          {['home', 'features', 'benefits'].map((section) => (
            <MenuItem key={section} href={`#${section}`} isActive={activeSection === section}>
              {langData[lang].navbarLandingPage[section]}
            </MenuItem>
          ))}
          <li className='md:hidden border-b-2 border-mtext flex justify-center px-4 py-3'>
            <LoginButton />
          </li>
        </ul>
      </nav>
      <div className='flex justify-end gap-5'>
        <div className='lang-menu'>
          <LanguageMenu isOpen={isLangMenuOpen} toggle={() => setIsLangMenuOpen(!isLangMenuOpen)} setLang={setLang} />
        </div>
        <div className='hidden md:block'>
          <LoginButton />
        </div>
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full bg-white w-10 md:hidden transition-all duration-300"
          style={{ transform: isMenuOpen ? 'rotate(360deg)' : 'rotate(0deg)' }}
        >
          {isMenuOpen ? <FaX /> : <FaBars />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
