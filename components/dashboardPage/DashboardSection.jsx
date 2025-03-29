'use client';

import React, { useEffect, useState } from 'react';
import UserTransactionDetail from './UserTransactionDetail';
import axios from 'axios';
import FinancialOverview from './FinancialOverview';
import { formatToRupiah } from '@/lib/utils';
import { Banknote, ArrowDown, ArrowUp } from 'lucide-react';
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
        value: formatToRupiah(balances),
        icon: <Banknote className="w-8 h-8 text-green-500" />,
      },
      {
        title: langData[lang].dashboardPage.totalTransactionIn,
        value: debit,
        icon: <ArrowDown className="w-8 h-8 text-blue-500" />,
      },
      {
        title: langData[lang].dashboardPage.totalTransactionOut,
        value: credit,
        icon: <ArrowUp className="w-8 h-8 text-red-500" />,
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
    <div className='flex-1 flex flex-col gap-4'>
      <UserTransactionDetail financeStats={userFinanceStats} />
      <FinancialOverview latestTransactionsHistory={latestTransactionsHistory} chartData={chartData} />
    </div>
  );
};

export default DashboardSection;
