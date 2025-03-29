'use client';

import { TableTransaction } from '@/components/transactionPage/TableTransaction';
import DashboardLayout from '../../layouts/DashboardLayout';
import Heading from '@/components/ui/heading';
import useTransactions from '@/app/hooks/useTransactions';
import useNeedLogin from '@/app/hooks/useNeedLogin';
import AddTransaction from '@/components/transactionPage/AddTransaction';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const TransactionIn = () => {
  const { transactionsIn, paginationTransactionsIn } = useTransactions('debit');
  const { isLoading, isLogin } = useNeedLogin();

  const { lang } = useLanguageStore();

  if (isLoading && !isLogin) return null;

  return (
    <DashboardLayout>
      <div className='flex flex-col gap-4 px-4 py-3'>
        <Heading title={langData[lang].transactionInPage.title} subTitle={langData[lang].transactionInPage.description}>
          <AddTransaction transactionType='debit' paging={paginationTransactionsIn} />
        </Heading>
        <TableTransaction datas={transactionsIn} paging={paginationTransactionsIn} mainHeader={lang === 'id' ? "Uang Masuk" : 'Income Money' } transactionType='debit' />
      </div>
    </DashboardLayout>
  );
};

export default TransactionIn;
