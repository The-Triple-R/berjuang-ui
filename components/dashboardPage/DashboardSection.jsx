'use client';

import React, { useEffect, useState } from 'react';
import UserTransactionDetail from './UserTransactionDetail';
import axios from 'axios';
import FinancialOverview from './FinancialOverview';
import { formatToRupiah } from '@/lib/utils';
import { Banknote, ArrowDown, ArrowUp } from 'lucide-react';

const financeStatsFunc = (balances, debit, credit) => {
  return [
    {
      title: 'Saldo',
      value: formatToRupiah(balances),
      icon: <Banknote className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Jumlah Transaksi Masuk',
      value: debit,
      icon: <ArrowDown className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Jumlah Transaksi Keluar',
      value: credit,
      icon: <ArrowUp className="w-8 h-8 text-red-500" />,
    },
  ];
};

const DashboardSection = () => {
  const [userFinanceStats, setUserFinanceStats] = useState([]);
  const [latestTransactionsHistory, setLatestTransactionsHistory] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchDataTransaction = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/financial-report`, { withCredentials: true });
        const userFinance = data.data;
        const financeStats = financeStatsFunc(userFinance.balance.currentAmount, userFinance.transactions.debit, userFinance.transactions.credit);

        setUserFinanceStats(financeStats);
        setLatestTransactionsHistory(userFinance.transactions.latestTransactionsHistory);
        setChartData(userFinance.balance.latestBalancesHistory);
      } catch (error) {}
    };

    fetchDataTransaction();
  }, []);

  return (
    <div className='flex-1 flex flex-col gap-4'>
      <UserTransactionDetail financeStats={userFinanceStats} />
      <FinancialOverview latestTransactionsHistory={latestTransactionsHistory} chartData={chartData} />
    </div>
  );
};

export default DashboardSection;
