'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import GoogleIcon from './icons/google-icon';
import { BsTranslate } from 'react-icons/bs';
import { Card } from './ui/card';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const MenuItem = ({ href, children, isActive }) => (
  <li className='border-b-2 md:border-none border-mtext flex justify-center'>
    <a
      href={href}
      className={`px-4 py-3 text-lg block ${isActive ? 'text-main' : 'text-mtext'} dark:text-white`}
    >
      {children}
    </a>
  </li>
);

const LoginButton = () => {
  const { lang } = useLanguageStore((state) => state);

  return (
    <Button className='bg-white'>
      <GoogleIcon />
      {langData[lang].loginButton}
    </Button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { lang, setLang } = useLanguageStore((state) => state);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const onScroll = () => {
      let currentSection = '';

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className='sticky left-0 top-0 z-20 flex md:grid md:grid-cols-[1fr,auto,1fr] items-center w-full border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack p-4 md:py-2 md:px-8'>
      <h1 className='uppercase font-extrabold text-xl md:text-2xl text-mtext'>
        berj<span className='text-main'>uang</span>
      </h1>

      <button
        onClick={toggleMenu}
        className='md:hidden font-extrabold text-2xl flex items-center justify-center text-gray-800 dark:text-white transition-transform duration-300 ease-in-out'
        style={{ transform: isMenuOpen ? 'rotate(360deg)' : 'rotate(0deg)' }}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      <nav
        className={`absolute md:static top-full ${
          isMenuOpen ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'
        } md:opacity-100 bg-white dark:bg-secondaryBlack border-t-4 md:border-none border-border dark:border-darkNavBorder transition-all duration-300 ease-in-out w-full`}
      >
        <ul className='flex flex-col md:flex-row'>
          <MenuItem
            href='#home'
            isActive={activeSection === 'home'}
          >
            {langData[lang].navbarLandingPage.home}
          </MenuItem>
          <MenuItem
            href='#features'
            isActive={activeSection === 'features'}
          >
            {langData[lang].navbarLandingPage.features}
          </MenuItem>
          <MenuItem
            href='#benefits'
            isActive={activeSection === 'benefits'}
          >
            {langData[lang].navbarLandingPage.benefits}
          </MenuItem>
          <li className='md:hidden border-b-2 border-mtext flex justify-center px-4 py-3 bor'>
            <LoginButton />
          </li>
        </ul>
      </nav>

      <div className='hidden md:flex justify-end gap-5'>
        <div className='relative'>
          <Button className='rounded-full bg-white w-10'>
            <BsTranslate />
          </Button>
          <ul className='absolute'>
            <Card className='bg-white flex flex-col gap-2'>
              <li>
                <button
                  className='cursor-pointer'
                  onClick={() => setLang('id')}
                >
                  Indonesia
                </button>
              </li>
              <li>
                <button
                  className='cursor-pointer'
                  onClick={() => setLang('en')}
                >
                  English
                </button>
              </li>
            </Card>
          </ul>
        </div>
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
