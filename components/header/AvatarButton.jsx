import  { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import useUserStore from '@/lib/zustand/useUserStore';
import { Card } from '../ui/card';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';

const AvatarButton = () => {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  const { user, setIsLogin, setUser } = useUserStore((state) => state);

  const toggleAvatarMenu = () => setIsAvatarMenuOpen(!isAvatarMenuOpen);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.avatar-menu')) setIsAvatarMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const logoutHandler = async () => {
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      if (data.status === 200) {
        setIsLogin(false);
        setUser({});

        if (pathname !== '/') router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative avatar-menu'>
      <Avatar className='cursor-pointer' onClick={toggleAvatarMenu}>
        <AvatarImage src={user.picture} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <ul className={`absolute top-[calc(100%+0.75rem)] right-0 transform transition-all duration-300 ${isAvatarMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 pointer-events-none translate-y-[-10px]'} z-50`}>
        <Card className='bg-white py-2 flex flex-col shadow-md'>
          <li className='px-6 py-2 hover:bg-black hover:text-white cursor-pointer' onClick={logoutHandler}>
            <span className='text-lg'>Logout</span>
          </li>
        </Card>
      </ul>
    </div>
  );
};

export default AvatarButton;
