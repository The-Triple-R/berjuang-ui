import { formatToRupiah } from '@/lib/utils';
import React from 'react';

function TransactionEntry({ transaction }) {
  return (
    <div className='flex justify-between items-center gap-4 text-sm'>
      <div>
        <p className='font-semibold xl:text-xl 2xl:text-2xl'>{transaction.transactionType === 'debit' ? 'Pemasukan' : 'Pengeluaran'}</p>
        <p className='xl:text-lg 2xl:text-xl'>{transaction.description || 'Tidak ada deskripsi'}</p>
      </div>
      <div className='font-semibold'>
        <p className={`text-lg text-nowrap 2xl:text-xl ${transaction.transactionType === 'debit' ? 'text-green-600' : 'text-red-600'}`}>
          {transaction.transactionType === 'debit' ? `+${formatToRupiah(transaction.amount)}` : `-${formatToRupiah(transaction.amount)}`}
        </p>
      </div>
    </div>
  );
}

export default TransactionEntry;
