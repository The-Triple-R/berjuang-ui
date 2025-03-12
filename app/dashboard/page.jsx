import UserTransactionDetail from '@/components/dashboardPage/UserTransactionDetail';
import DashboardLayout from '../layouts/DashboardLayout';
import { DashboardChart } from '@/components/dashboardPage/DashboardChart';
import TransactionHistory from '@/components/dashboardPage/TransactionHistory';

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }
const Dashboard = async () => {
  // const data = await getData();

  return (
    <DashboardLayout>
      <div className='px-4 py-3'>
        <h2 className='font-semibold text-2xl py-7'>Dashboard</h2>
        <UserTransactionDetail />
        <DashboardChart />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
