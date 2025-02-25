'use client';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

function Footer() {
  const { lang } = useLanguageStore((state) => state);

  return (
    <footer className='font-semibold bg-[#262626] text-footerText pt-16 px-10'>
      <div className='w-[600px] max-w-full mx-auto'>
        <div className='grid grid-cols-3 gap-5 text-xl border-b border-[#ffffff13] pb-16'>
          <div className='col-span-2'>
            <h3>
              <Badge className='font-bold text-xl mb-4'>BerjUANG</Badge>
            </h3>
            <div className='flex text-2xl gap-2'>
              <FaFacebookF />
              <FaInstagram />
              <FaSquareXTwitter />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h5 className='mb-3 text-bg'>{langData[lang].footerSection.pagesHeader}</h5>
            <a href='#home'>{langData[lang].navbarLandingPage.home}</a>
            <a href='#features'>{langData[lang].navbarLandingPage.features}</a>
            <a href='#benefits'>{langData[lang].navbarLandingPage.benefits}</a>
          </div>
        </div>
        <p className='text-center py-7 font-base'>{langData[lang].footerSection.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
