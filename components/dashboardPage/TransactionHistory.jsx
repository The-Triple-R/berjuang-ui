import React from 'react';
import { Card } from '../ui/card';
import TransactionEntry from './TransactionEntry';

const TransactionHistory = () => {
  return (
    <Card className='flex-[3] p-5'>
      <h3 className='font-bold text-xl mb-2 p-1'>Riwayat Transaksi</h3>
      <div className='flex flex-col gap-4 p-1'>
        <TransactionEntry />
        <TransactionEntry />
        <TransactionEntry />
        <TransactionEntry />
        <TransactionEntry />
      </div>
    </Card>
  );
};

export default TransactionHistory;
