import DashboardHeader from '@/components/header/DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    <div className='lg:flex'>
      <aside className='fixed inset-y-0 start-0 flex w-64 lg:min-w-64 lg:[&.show]:min-w-[0px] h-screen  bg-neutral-100 dark:bg-neutral-500 border-e border-black transition-all duration-500 ease-in-out -translate-x-full lg:translate-x-0 [&.show]:translate-x-0 max-lg:z-50 rtl:translate-x-full lg:rtl:translate-x-0 lg:block'>
        <h1>Logo</h1>
        <h1>Logo</h1>
      </aside>
      <div className='w-full'>
        <DashboardHeader />
        <main className='flex-grow p-4'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
