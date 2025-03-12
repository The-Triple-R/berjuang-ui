import React from 'react';
import { Card } from '../ui/card';

const UserTransactionDetail = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-5 text-xl'>
      <Card className='p-5 font-semibold'>
        <h3>Saldo</h3>
        <h6>Rp. 200.000.000.000</h6>
      </Card>
      <Card className='p-5 font-semibold'>
        <h3>Total Pemasukan</h3>
        <h6>+Rp. 200.000</h6>
      </Card>
      <Card className='p-5 font-semibold'>
        <h3>Total Pengeluaran</h3>
        <h6>-Rp. 0</h6>
      </Card>
    </div>
  );
};

export default UserTransactionDetail;
