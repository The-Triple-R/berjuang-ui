import React from 'react';
import { Card } from '../ui/card';
import TransactionEntry from './TransactionEntry';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const TransactionHistory = ({ latestTransactionsHistory }) => {
  const { lang } = useLanguageStore();

  return (
    <Card className='flex-[3] p-5 bg-transparent'>
      <h3 className='font-bold mb-2 p-1 text-xl md:text-2xl'>{langData[lang].dashboardPage.historyTitle}</h3>
      <div className='flex flex-col gap-4 p-1 2xl:gap-6'>
        {latestTransactionsHistory.length === 0 ? (
          <p className='text-center mt-4'>{langData[lang].dashboardPage.noHistoryText}</p>
        ) : (
          <div>
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