import { formatNumber } from '@/lib/utils';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import React from 'react';

function TransactionEntry({ transaction }) {
  const { lang } = useLanguageStore();

  return (
    <div className='flex justify-between items-center gap-4 text-sm'>
      <div>
        <p className='font-semibold xl:text-xl 2xl:text-2xl'>{transaction.transactionType === 'debit' ? (lang === 'id' ? 'Pemasukan' : 'Income') : lang === 'id' ? 'Pengeluaran' : 'Expense'}</p>
        <p className='xl:text-lg 2xl:text-xl'>{transaction.description || 'Tidak ada deskripsi'}</p>
      </div>
      <div className='font-semibold'>
        <p className={`text-lg 2xl:text-xl ${transaction.transactionType === 'debit' ? 'text-green-600' : 'text-red-600'}`}>
          {transaction.transactionType === 'debit' ? '+' : '-'}Rp. {formatNumber(transaction.amount)}
        </p>
      </div>
    </div>
  );
}

export default TransactionEntry;
