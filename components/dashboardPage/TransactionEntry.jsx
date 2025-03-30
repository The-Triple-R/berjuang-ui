import React from 'react';
import { formatToRupiah } from '@/lib/utils';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

function TransactionEntry({ transaction }) {
  const { lang } = useLanguageStore();

  return (
    // <div className='flex justify-between items-center gap-4 text-sm'>
    //   <div className='flex-1'>
    //     <p className='font-semibold xl:text-xl 2xl:text-2xl'>{transaction.transactionType === 'debit' ? (lang === 'id' ? 'Pemasukan' : 'Income') : lang === 'id' ? 'Pengeluaran' : 'Expense'}</p>
    //     <p className='xl:text-lg 2xl:text-xl text-ellipsis overflow-hidden whitespace-nowrap'>{transaction.description || 'Tidak ada deskripsi'}</p>
    //   </div>
    //   <div className='font-semibold'>
    //     <p className={`text-lg text-nowrap 2xl:text-xl ${transaction.transactionType === 'debit' ? 'text-green-600' : 'text-red-600'}`}>
    //       {transaction.transactionType === 'debit' ? `+${formatToRupiah(transaction.amount)}` : `-${formatToRupiah(transaction.amount)}`}
    //     </p>
    //   </div>
    // </div>

    <div className='flex justify-between items-center gap-4 text-sm'>
      <div className='flex-1 min-w-0'>
        <p className='font-semibold xl:text-xl 2xl:text-2xl'>{transaction.transactionType === 'debit' ? (lang === 'id' ? 'Pemasukan' : 'Income') : lang === 'id' ? 'Pengeluaran' : 'Expense'}</p>
        <p className='xl:text-lg 2xl:text-xl truncate'>{transaction.description || 'Tidak ada deskripsi'}</p>
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
