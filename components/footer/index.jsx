'use client';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

function Footer() {
  const { lang } = useLanguageStore((state) => state);
  const pages = [
    { id: 'home', label: langData[lang].navbarLandingPage.home },
    { id: 'features', label: langData[lang].navbarLandingPage.features },
    { id: 'benefits', label: langData[lang].navbarLandingPage.benefits },
    { id: 'team', label: langData[lang].navbarLandingPage.team },
  ];

  return (
    <footer className="bg-[#262626] text-footerText py-6 px-5">
      <div className="container mx-auto max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-[#ffffff13] pb-8">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <Badge className="font-bold text-lg">BERJUANG</Badge>
            <div className="flex gap-3 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaSquareXTwitter />
            </div>
          </div>

          <div className="sm:col-span-2 flex justify-center sm:justify-end">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h5 className="mb-2 text-bg">{langData[lang].footerSection.pagesHeader}</h5>
              {pages.map((page) => (
                <a key={page.id} href={`#${page.id}`} className="hover:text-white transition">
                  {page.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center pt-5 text-sm">{langData[lang].footerSection.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
