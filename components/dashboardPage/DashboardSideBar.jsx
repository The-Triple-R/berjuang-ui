'use client';

import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { SiSimpleanalytics } from 'react-icons/si';
import { FaArrowDown, FaArrowUp, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';

const DashboardSideBar = ({ isOpen, sidebarRef }) => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <SiSimpleanalytics /> },
    { href: '/transaction/in', label: 'Transaction In', icon: <FaArrowDown /> },
    { href: '/transaction/out', label: 'Transaction Out', icon: <FaArrowUp /> },
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar fixed inset-y-0 start-0 flex flex-col w-64 h-screen bg-neutral-100 dark:bg-neutral-500 border-e border-black transition-all duration-500 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:min-w-64 lg:block`}
    >
      <h1 className="uppercase font-extrabold py-6 px-7 text-2xl text-mtext flex items-center gap-2">
        <FaMoneyBillWave /> <span>berj<span className="text-main">uang</span></span>
      </h1>
      <ul className='px-3 flex flex-col gap-2'>
        {menuItems.map(({ href, label, icon }) => (
          <li key={href}>
            <Link href={href}>
              <Button
                className={`w-full justify-start flex items-center gap-2 hover:border hover:bg-white ${
                  pathname === href ? 'border bg-white dark:bg-neutral-600 font-bold' : 'bg-transparent border-0'
                }`}
                variant='reverse'
              >
                {icon} {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardSideBar;