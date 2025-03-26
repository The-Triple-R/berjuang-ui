'use client';

import { TableTransaction } from '@/components/transactionPage/TableTransaction';
import DashboardLayout from '../../layouts/DashboardLayout';
import Heading from '@/components/ui/heading';
import { BsPlusCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import usePopup from '../../hooks/usePopup';
import TransactionPopup from '@/components/transactionPage/TransactionPopup';
import useTransactions from '@/app/hooks/useTransactions';
import useNeedLogin from '@/app/hooks/useNeedLogin';

const TransactionOut = () => {
  const { isOpen, openPopup, closePopup } = usePopup();
  const { transactionsOut, paginationTransactionsOut } = useTransactions('credit');
  const { isLoading, isLogin } = useNeedLogin();

  if (isLoading && !isLogin) return null;

  return (
    <DashboardLayout>
      <div className='flex flex-col gap-4 px-4 py-3'>
        <Heading title='Data Transaksi Pengeluaran' subTitle='Data pengeluaran uang'>
          <Button className='bg-[#01669E] text-white' onClick={openPopup}>
            Tambah
            <BsPlusCircle />
          </Button>
        </Heading>
        <TableTransaction datas={transactionsOut} paging={paginationTransactionsOut} mainHeader='Uang Keluar' transactionType='credit' />
      </div>
      <TransactionPopup isOpen={isOpen} onClose={closePopup} paging={paginationTransactionsOut} transactionType='credit' />
    </DashboardLayout>
  );
};

export default TransactionOut;
