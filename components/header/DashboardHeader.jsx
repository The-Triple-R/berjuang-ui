import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';

const DashboardHeader = () => {
  return (
    <header>
      <div className='bg-neutral-100 flex justify-between px-4 py-3 border-b border-border lg:flex-row-reverse'>
        <div className='lg:hidden'>
          <Button
            className='rounded-full bg-white w-10 border'
            variant='reverse'
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            className='rounded-full bg-white w-10 border'
            variant='reverse'
          ></Button>
          <Button
            className='rounded-full bg-white w-10 border'
            variant='reverse'
          ></Button>
          <Avatar>
            <AvatarImage src='https://github.com/ekmass.png' />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
