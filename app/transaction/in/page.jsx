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
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const TransactionIn = () => {
  const { isOpen, openPopup, closePopup } = usePopup();
  const { transactionsIn, paginationTransactionsIn } = useTransactions('debit');
  const { isLoading, isLogin } = useNeedLogin();

  const { lang } = useLanguageStore();

  if (isLoading && !isLogin) return null;

  return (
    <DashboardLayout>
      <div className='flex flex-col gap-4 px-4 py-3'>
        <Heading title={langData[lang].transactionInPage.title} subTitle={langData[lang].transactionInPage.description}>
          {/* <Button className='bg-[#01669E] text-white' onClick={openPopup}>
            Tambah
            <BsPlusCircle />
          </Button> */}
          <AddTransaction transactionType='debit' paging={paginationTransactionsIn} />
        </Heading>
        <TableTransaction datas={transactionsIn} paging={paginationTransactionsIn} mainHeader={lang === 'id' ? "Uang Masuk" : 'Income Money' } transactionType='debit' />
      </div>
      {/* <TransactionPopup isOpen={isOpen} onClose={closePopup} transactionType='debit' paging={paginationTransactionsIn} /> */}
    </DashboardLayout>
  );
};

export default TransactionIn;
