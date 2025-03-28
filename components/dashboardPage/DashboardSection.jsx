'use client';

import React, { useEffect, useState } from 'react';
import UserTransactionDetail from './UserTransactionDetail';
import axios from 'axios';
import FinancialOverview from './FinancialOverview';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const DashboardSection = () => {
  const [userFinanceStats, setUserFinanceStats] = useState([]);
  const [latestTransactionsHistory, setLatestTransactionsHistory] = useState([]);
  const [chartData, setChartData] = useState([]);

  const { lang } = useLanguageStore();

  const financeStatsFunc = (balances, debit, credit) => {
    return [
      {
        title: langData[lang].dashboardPage.balances,
        value: balances,
        prefix: 'Rp',
        textColorClass: '',
      },
      {
        title: langData[lang].dashboardPage.totalTransactionIn,
        value: debit,
        textColorClass: 'text-green-600',
      },
      {
        title:  langData[lang].dashboardPage.totalTransactionOut,
        value: credit,
        textColorClass: 'text-red-600',
      },
    ];
  };

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
  }, [lang]);

  return (
    <div className='flex-1'>
      <UserTransactionDetail financeStats={userFinanceStats} />
      <FinancialOverview latestTransactionsHistory={latestTransactionsHistory} chartData={chartData} />
    </div>
  );
};

export default DashboardSection;
