import React from 'react';
import { Card } from '../ui/card';

const financeStats = [
  {
    title: 'Saldo',
    value: '200.000.000.000',
    prefix: 'Rp.',
    textColorClass: '',
  },
  {
    title: 'Total Pemasukan',
    value: '200.000',
    prefix: '+Rp.',
    textColorClass: 'text-green-600',
  },
  {
    title: 'Total Pengeluaran',
    value: '0',
    prefix: '-Rp.',
    textColorClass: 'text-red-600',
  },
];

const UserTransactionDetail = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-5'>
      {financeStats.map((item, index) => (
        <Card className='p-6 bg-transparent' key={index}>
          <h3 className='mb-2 text-lg font-medium'>{item.title}</h3>
          <p className={item.textColorClass}>{item.prefix}</p>
          <h6 className={`text-3xl font-semibold truncate ${item.textColorClass} md:text-xl xl:text-3xl 2xl:text-4xl`}>{item.value}</h6>
        </Card>
      ))}
    </div>
  );
};

export default UserTransactionDetail;
