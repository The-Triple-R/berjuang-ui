import React from 'react';
import { Card } from '../ui/card';
import TransactionEntry from './TransactionEntry';

const TransactionHistory = ({ latestTransactionsHistory }) => {
  return (
    <Card className='flex-[3] p-5 bg-transparen'>
      <h3 className='font-bold text-xl mb-2 p-1 xl:text-2xl 2xl:mb-9 2xl:text-3xl'>Riwayat Transaksi</h3>
      <div className='flex flex-col gap-4 p-1 2xl:gap-6'>
        {latestTransactionsHistory.length === 0 ? <p className='text-center mt-4'>Belum ada riwayat transaksi</p> : latestTransactionsHistory.map((transaction, index) => <TransactionEntry transaction={transaction} key={index} />)}
      </div>
    </Card>
  );
};

export default TransactionHistory;
