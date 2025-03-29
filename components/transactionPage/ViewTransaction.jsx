import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { TbSearch } from 'react-icons/tb';
import { formatDate, formatToRupiah } from '@/lib/utils';

const ViewTransaction = ({ amount, description, transactionType, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = () => setIsOpen((prevState) => !prevState);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className='text-xl text-white bg-[#33D1AB] text-[1rem]'>
          Detail
          <TbSearch />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[450px] rounded-lg shadow-xl p-6'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-gray-800'>Detail Transaksi</DialogTitle>
          <DialogDescription className='text-sm text-gray-600 mt-1'>
            Berikut adalah detail dari transaksi yang kamu pilih.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 mt-4'>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>Jumlah Uang</p>
            <p className='mt-1 text-lg font-semibold text-gray-900'>{formatToRupiah(amount)}</p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>Deskripsi</p>
            <p className='mt-1 text-gray-800'>{description || 'Tidak ada deskripsi'}</p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>Jenis Transaksi</p>
            <p className='mt-1 text-gray-800 capitalize'>{transactionType}</p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>Tanggal</p>
            <p className='mt-1 text-gray-800'>{formatDate(date)}</p>
          </div>
        </div>
        <DialogFooter className='mt-6 flex justify-end'>
          <Button 
            onClick={() => setIsOpen(false)} 
            className='bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-md transition-all'
          >
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTransaction;
