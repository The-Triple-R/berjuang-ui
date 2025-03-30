'use client';
import DashboardSideBar from '@/components/dashboardPage/DashboardSideBar';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useState, useEffect, useRef } from 'react';

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && !e.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='min-h-screen'>
      <DashboardHeader onOpenHandler={() => setIsOpen(!isOpen)} />
      <DashboardSideBar isOpen={isOpen} sidebarRef={sidebarRef} />
      <main className='transition-all duration-500 ease-in-out lg:ml-56'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
