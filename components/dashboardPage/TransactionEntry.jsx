import React from 'react';
import PropTypes from 'prop-types';

function TransactionEntry(props) {
  return (
    <div className='flex justify-between items-center gap-4 text-sm'>
      <div>
        <p className='font-semibold xl:text-xl 2xl:text-2xl'>Pemasukan</p>
        <p className='xl:text-lg 2xl:text-xl'>Deskripsi Pemasukan 1</p>
      </div>
      <div className='font-semibold'>
        <p className='text-lg 2xl:text-xl'>+ Rp. 200.000</p>
      </div>
    </div>
  );
}

TransactionEntry.propTypes = {};

export default TransactionEntry;
