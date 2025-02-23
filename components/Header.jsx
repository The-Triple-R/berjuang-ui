import React from 'react';
import { Button } from './ui/button';
import GoogleIcon from './icons/google-icon';

function Header() {
  return (
    <header className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack px-5 m500:h-16 '>
      <div className='mx-auto flex w-[1300px] dark:text-darkText text-text max-w-full items-center justify-between'>
        <div className='flex gap-12'>
          <h1>BerjUANG</h1>
          <nav>
            <ul className='flex gap-7 font-semibold'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#features'>Features</a>
              </li>
            </ul>
          </nav>
        </div>
        <Button className='bg-white'>
          <GoogleIcon />
          Login with Google
        </Button>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
