import { Button } from '../ui/button';
import { SiSimpleanalytics } from 'react-icons/si';
import { GrTransaction } from 'react-icons/gr';

const DashboardSideBar = () => {
  return (
    <aside className='fixed inset-y-0 start-0 flex flex-col w-64 h-screen bg-neutral-100 dark:bg-neutral-500 border-e border-black transition-all duration-500 ease-in-out -translate-x-full lg:translate-x-0 [&.show]:translate-x-0 max-lg:z-50 rtl:translate-x-full lg:rtl:translate-x-0 lg:block lg:min-w-64 lg:[&.show]:min-w-[0px]'>
      <h1 className='py-4 px-7 text-2xl'>BERJUANG</h1>
      <ul className='px-3 flex flex-col gap-1'>
        <li>
          <Button
            className='bg-white w-full justify-start hover:border hover:bg-neutral-50'
            variant='reverse'
          >
            <SiSimpleanalytics />
            Dashboard
          </Button>
        </li>
        <li>
          <Button
            className='bg-white w-full justify-start bg-transparent border-0 hover:border hover:bg-neutral-50'
            variant='reverse'
          >
            <GrTransaction />
            Transaction
          </Button>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSideBar;
