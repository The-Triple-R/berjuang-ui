import DashboardLayout from '../layouts/DashboardLayout';
import { DashboardChart } from '@/components/dashboardPage/DashboardChart';

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }
const Dashboard = async () => {
  // const data = await getData();

  return (
    <DashboardLayout>
      <div className='px-4 py-3'>
        <DashboardChart />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
