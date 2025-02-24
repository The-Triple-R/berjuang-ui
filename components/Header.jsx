import React from 'react';
import { Button } from './ui/button';
import GoogleIcon from './icons/google-icon';

function Header() {
  return (
    <header className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack px-5 '>
      <div className='mx-auto flex w-[1300px] max-w-full text-text items-center justify-between dark:text-darkText'>
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
              <li>
                <a href='#benefits'>Benefits</a>
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
