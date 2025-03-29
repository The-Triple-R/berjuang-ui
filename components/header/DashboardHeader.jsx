'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsTranslate } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import useUserStore from '@/lib/zustand/useUserStore';
import { Card } from '../ui/card';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DashboardHeader = ({ onOpenHandler }) => {
  const { user, setIsLogin, setUser } = useUserStore((state) => state);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  
  const router = useRouter();

  const toggleAvatarMenu = () => setIsAvatarMenuOpen(!isAvatarMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.avatar-menu')) setIsAvatarMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const logoutHandler = async () => {
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {}, {
        withCredentials: true
      });
      
      if (data.status === 200) {
        setIsLogin(false);
        setUser({});
        
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='sticky w-full z-999 top-0 left-0 bg-neutral-100'>
      <div className='flex justify-between px-4 py-3 border-b border-border lg:flex-row-reverse'>
        <div className='lg:hidden'>
          <Button
            onClick={onOpenHandler}
            className='rounded-full bg-white w-10 border'
            variant='reverse'
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        <div className='flex items-center gap-4 [&_svg]:size-5'>
          <Button
            className='rounded-full bg-white w-12 h-12 border'
            variant='reverse'
          >
            <MdDarkMode />
          </Button>
          <Button
            className='rounded-full bg-white w-12 h-12 border '
            variant='reverse'
          >
            <BsTranslate />
          </Button>
          <div className='relative avatar-menu'>
            <Avatar
              className='cursor-pointer'
              onClick={toggleAvatarMenu}
            >
              <AvatarImage src={user.picture} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <ul className={`absolute top-[calc(100%+0.75rem)] right-0 transform transition-all duration-300 ${isAvatarMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 pointer-events-none translate-y-[-10px]'} z-50`}>
              <Card className='bg-white py-2 flex flex-col shadow-md'>
                <li
                  className='px-6 py-2 hover:bg-black hover:text-white cursor-pointer'
                  onClick={logoutHandler}
                >
                  <span className='text-lg'>Logout</span>
                </li>
              </Card>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
