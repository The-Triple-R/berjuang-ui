'use client';

import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { SiSimpleanalytics } from 'react-icons/si';
import { GrTransaction } from 'react-icons/gr';
import Link from 'next/link';

const DashboardSideBar = () => {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 start-0 flex flex-col w-64 h-screen bg-neutral-100 dark:bg-neutral-500 border-e border-black transition-all duration-500 ease-in-out -translate-x-full lg:translate-x-0 [&.show]:translate-x-0 max-lg:z-50 rtl:translate-x-full lg:rtl:translate-x-0 lg:block lg:min-w-64 lg:[&.show]:min-w-[0px]'>
      <h1 className='py-4 px-7 text-2xl'>BERJUANG</h1>
      <ul className='px-3 flex flex-col gap-1'>
        <li>
          <Link href="/dashboard">
            <Button
              className={`w-full justify-start hover:border hover:bg-neutral-50 ${
                pathname === '/dashboard' ? 'bg-white dark:bg-neutral-600 font-bold' : 'bg-transparent border-0'
              }`}
              variant='reverse'
            >
              <SiSimpleanalytics aria-label="Dashboard" />
              Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/transaction">
            <Button
              className={`w-full justify-start hover:border hover:bg-neutral-50 ${
                pathname === '/transaction' ? 'bg-white dark:bg-neutral-600 font-bold' : 'bg-transparent border-0'
              }`}
              variant='reverse'
            >
              <GrTransaction aria-label="Transaction" />
              Transaction
            </Button>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSideBar;
