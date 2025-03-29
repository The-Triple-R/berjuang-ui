'use client';

import React, { useEffect, useState } from 'react';
import UserTransactionDetail from './UserTransactionDetail';
import FinancialOverview from './FinancialOverview';
import axios from 'axios';
import { formatToRupiah } from '@/lib/utils';
import { Banknote, ArrowDown, ArrowUp } from 'lucide-react';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

const DashboardSection = () => {
  const [userFinanceRawData, setUserFinanceRawData] = useState(null);
  const [userFinanceStats, setUserFinanceStats] = useState([]);
  const [latestTransactionsHistory, setLatestTransactionsHistory] = useState([]);
  const [chartData, setChartData] = useState([]);
  const { lang } = useLanguageStore();

  const formatFinanceStats = (balances, debit, credit) => [
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

  const fetchDataTransaction = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/financial-report`,
        { withCredentials: true }
      );

      const fetchedData = data.data;
      setUserFinanceRawData(fetchedData);
      setLatestTransactionsHistory(fetchedData.transactions.latestTransactionsHistory);
      setChartData(fetchedData.balance.latestBalancesHistory);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataTransaction();
  }, []);

  useEffect(() => {
    if (userFinanceRawData) {
      setUserFinanceStats(
        formatFinanceStats(
          userFinanceRawData.balance.currentAmount,
          userFinanceRawData.transactions.debit,
          userFinanceRawData.transactions.credit
        )
      );
    }
  }, [userFinanceRawData, lang]);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <UserTransactionDetail financeStats={userFinanceStats} />
      <FinancialOverview
        latestTransactionsHistory={latestTransactionsHistory}
        chartData={chartData}
      />
    </div>
  );
};

export default DashboardSection;
