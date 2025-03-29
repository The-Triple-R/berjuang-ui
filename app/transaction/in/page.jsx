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
import AddTransaction from '@/components/transactionPage/AddTransaction';

const TransactionIn = () => {
  const { isOpen, openPopup, closePopup } = usePopup();
  const { transactionsIn, paginationTransactionsIn } = useTransactions('debit');
  const { isLoading, isLogin } = useNeedLogin();

  if (isLoading && !isLogin) return null;
  
  return (
    <DashboardLayout>
      <div className='flex flex-col gap-4 px-4 py-3'>
        <Heading title='Data Transaksi Pemasukan' subTitle='Data pemasukan uang'>
          <AddTransaction transactionType='debit' paging={paginationTransactionsIn} />
        </Heading>
        <TableTransaction datas={transactionsIn} paging={paginationTransactionsIn} mainHeader='Uang Masuk' transactionType='debit' />
      </div>
    </DashboardLayout>
  );
};

export default TransactionIn;
