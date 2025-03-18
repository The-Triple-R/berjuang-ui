import DashboardLayout from '../layouts/DashboardLayout';
import { DashboardChart } from '@/components/dashboardPage/DashboardChart';
import UserTransactionDetail from '@/components/dashboardPage/UserTransactionDetail';
import AISection from '@/components/dashboardPage/AISection';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='px-4 py-7 flex flex-col h-full'>
        <div className='flex-1'>
          <h2 className='font-bold text-lg mb-4'>Dashboard</h2>
          <UserTransactionDetail />
          <DashboardChart />
        </div>
        <AISection />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
