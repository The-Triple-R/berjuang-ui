'use client';

import DashboardLayout from '../layouts/DashboardLayout';
import AISection from '@/components/dashboardPage/AISection';
import DashboardSection from '@/components/dashboardPage/DashboardSection';
import useNeedLogin from '../hooks/useNeedLogin';
import Heading from '@/components/ui/heading';

const Dashboard = () => {
  const { isLoading, isLogin } = useNeedLogin();

  if (isLoading && !isLogin) return null;

  return (
    <DashboardLayout>
      <div className='px-4 py-3 flex flex-col space-y-4 h-full'>
        <Heading title='Dashboard' subTitle='Selamat Datang Di Dashboard Berjuang' />
        <DashboardSection />
        <AISection />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
