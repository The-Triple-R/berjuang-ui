'use client';

import React, { useEffect, useState } from 'react';
import UserTransactionDetail from './UserTransactionDetail';
import axios from 'axios';
import FinancialOverview from './FinancialOverview';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const DashboardSection = () => {
  const [userFinanceRawData, setUserFinanceRawData] = useState(null);
  const [userFinanceStats, setUserFinanceStats] = useState([]);
  const [latestTransactionsHistory, setLatestTransactionsHistory] = useState([]);
  const [chartData, setChartData] = useState([]);

  const { lang } = useLanguageStore();

  const formatFinanceStats = (balances, debit, credit) => {
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
        title: langData[lang].dashboardPage.totalTransactionOut,
        value: credit,
        textColorClass: 'text-red-600',
      },
    ];
  };

  const fetchDataTransaction = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/financial-report`, { withCredentials: true });

      setUserFinanceRawData(data.data);
      setLatestTransactionsHistory(userFinance.transactions.latestTransactionsHistory);
      setChartData(userFinance.balance.latestBalancesHistory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  useEffect(() => {
    if (userFinanceRawData) {
      setUserFinanceStats(formatFinanceStats(userFinanceRawData.balance.currentAmount, userFinanceRawData.transactions.debit, userFinanceRawData.transactions.credit));
    }
  }, [lang, userFinanceRawData]);

  console.log(userFinanceRawData)

  return (
    <div className='flex-1'>
      <UserTransactionDetail financeStats={userFinanceStats} />
      <FinancialOverview latestTransactionsHistory={latestTransactionsHistory} chartData={chartData} />
    </div>
  );
};

export default DashboardSection;
