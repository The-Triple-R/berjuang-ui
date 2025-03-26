'use client';

import DashboardLayout from '../layouts/DashboardLayout';
import AISection from '@/components/dashboardPage/AISection';
import DashboardSection from '@/components/dashboardPage/DashboardSection';
import useNeedLogin from '../hooks/useNeedLogin';

const Dashboard = () => {
  const { isLoading, isLogin } = useNeedLogin();

  if (isLoading && !isLogin) return null;

  return (
    <DashboardLayout>
      <div className='px-4 py-3 flex flex-col h-full'>
        <h1 className='text-xl md:text-2xl font-bold mb-5'>Dashboard</h1>
        <DashboardSection />
        <AISection />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
