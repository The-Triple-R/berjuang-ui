import React from 'react';
import { Card } from '../ui/card';

const UserTransactionDetail = ({ financeStats }) => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
      {financeStats.length !== 0 ? (
        financeStats.map((item, index) => (
          <Card className="p-6 bg-transparent flex justify-between items-center" key={index}>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base">{item.title}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
            <div className="p-3">{item.icon}</div>
          </Card>
        ))
      ) : (
        [...Array(3)].map((_, index) => (
          <Card className="p-6 bg-transparent flex justify-between items-center animate-pulse" key={index}>
            <div className="flex flex-col gap-1 w-full">
              <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
              <div className="h-8 w-1/2 bg-gray-300 rounded-md mt-2"></div>
            </div>
            <div className="p-3 bg-gray-300 rounded-xl w-10 h-10"></div>
          </Card>
        ))
      )}
    </div>
  );
};

export default UserTransactionDetail;
