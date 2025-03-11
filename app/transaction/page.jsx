'use client';

import { TableTransaction } from '@/components/transactionPage/TableTransaction';
import DashboardLayout from '../layouts/DashboardLayout';
import Heading from '@/components/ui/heading';
import { BsPlusCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import usePopup from '../hooks/usePopup';
import TransactionPopup from '@/components/transactionPage/TransactionPopup';

const Dashboard = () => {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 px-4 py-3">
        <Heading title="Data Transaksi" subTitle="Transaksi">
          <Button className="bg-[#01669E] text-white" onClick={openPopup}>
            Tambah
            <BsPlusCircle />
          </Button>
        </Heading>
        <TableTransaction />
      </div>
      <TransactionPopup isOpen={isOpen} onClose={closePopup} />
    </DashboardLayout>
  );
};

export default Dashboard;
