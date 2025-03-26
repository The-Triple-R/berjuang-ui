import React from 'react';
import { Card } from '../ui/card';
import { formatNumber } from '@/lib/utils';

const UserTransactionDetail = ({ financeStats }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-5'>
      {financeStats.length !== 0 ? (
        financeStats.map((item, index) => (
          <Card className='p-6 bg-transparent' key={index}>
            <h3 className='mb-2 text-lg font-medium'>{item.title}</h3>
            {item.title === 'Saldo' ? <p className={item.textColorClass}>Rp.</p> : <br></br>}
            <h6 className={`text-3xl font-semibold truncate ${item.textColorClass} md:text-xl xl:text-3xl 2xl:text-4xl`}>{formatNumber(item.value)}</h6>
          </Card>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserTransactionDetail;
