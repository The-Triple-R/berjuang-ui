'use client';

import { TableTransaction } from '@/components/transactionPage/TableTransaction';
import Heading from '@/components/ui/heading';
import { BsPlusCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import TransactionPopup from '@/components/transactionPage/TransactionPopup';
import DashboardLayout from '@/app/layouts/DashboardLayout';
import usePopup from '@/app/hooks/usePopup';

const TransactionOutPage = () => {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 px-4 py-3">
        <Heading title="Data Transaksi Keluar" subTitle="Data uang yang telah dikeluarkan">
          <Button className="bg-[#01669E] text-white" onClick={openPopup}>
            Tambah
            <BsPlusCircle />
          </Button>
        </Heading>
        <TableTransaction transactionType="Uang Keluar" />
      </div>
      <TransactionPopup isOpen={isOpen} onClose={closePopup} title='Tambah Transaksi Keluar' />
    </DashboardLayout>
  );
};

export default TransactionOutPage;
