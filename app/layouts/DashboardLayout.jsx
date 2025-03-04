import DashboardSideBar from '@/components/dashboardPage/DashboardSideBar';
import DashboardHeader from '@/components/header/DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    <div className='lg:flex'>
      <DashboardSideBar />
      <div className='w-full'>
        <DashboardHeader />
        <main className='relative transition-all duration-500 ease-in-out lg:ml-64'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
