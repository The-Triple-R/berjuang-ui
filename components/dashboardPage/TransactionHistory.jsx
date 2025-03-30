import React from 'react';
import { Card } from '../ui/card';
import TransactionEntry from './TransactionEntry';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const TransactionHistory = ({ latestTransactionsHistory }) => {
  const { lang } = useLanguageStore();

  return (
    <Card className='p-5 bg-transparent lg:col-span-3 flex flex-col'>
      <h3 className='font-bold mb-3 p-1 text-xl md:text-2xl lg:mb-7 2xl:mb-16'>{langData[lang].dashboardPage.historyTitle}</h3>
      <div>
        {latestTransactionsHistory.length === 0 ? (
          <p className='text-center'>{langData[lang].dashboardPage.noHistoryText}</p>
        ) : (
          <div className='flex flex-col gap-3 p-1 2xl:gap-10'>
            {latestTransactionsHistory.map((transaction, index) => (
              <TransactionEntry transaction={transaction} key={index} />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default TransactionHistory;