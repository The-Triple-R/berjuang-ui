'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import useUserStore from '@/lib/zustand/useUserStore';
import { Card } from '../ui/card';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LanguageMenu from './LanguageMenu';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import AvatarButton from './AvatarButton';

const DashboardHeader = ({ onOpenHandler }) => {
  const { setIsLogin, setUser } = useUserStore((state) => state);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { setLang } = useLanguageStore();

  const router = useRouter();

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-menu')) setIsLangMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className='sticky w-full z-50 top-0 left-0 bg-neutral-100'>
      <div className='flex justify-between px-4 py-3 border-b border-border lg:flex-row-reverse'>
        <div className='lg:hidden'>
          <Button onClick={onOpenHandler} className='rounded-full bg-white w-10 border' variant='reverse'>
            <RxHamburgerMenu />
          </Button>
        </div>
        <div className='flex items-center gap-4 [&_svg]:size-5'>
          <div className='lang-menu'>
            <LanguageMenu isOpen={isLangMenuOpen} toggle={toggleLangMenu} setLang={setLang} variant='reverse' />
          </div>
          <AvatarButton />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
