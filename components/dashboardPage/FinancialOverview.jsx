'use client';
import TransactionHistory from './TransactionHistory';
import DashboardAreaChart from './DashboardAreaChart';

function FinancialOverview({ latestTransactionsHistory, chartData }) {
  if (chartData.length == 0) return null
  return (
    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-7'>
      <DashboardAreaChart chartData={chartData} />
      <TransactionHistory latestTransactionsHistory={latestTransactionsHistory} />
    </div>
  );
}

export default FinancialOverview;
