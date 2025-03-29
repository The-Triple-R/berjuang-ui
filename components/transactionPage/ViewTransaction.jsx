import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { TbSearch } from 'react-icons/tb';
import { formatDate, formatToRupiah } from '@/lib/utils';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

const ViewTransaction = ({ amount, description, transactionType, date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguageStore();

  const handleOpenChange = () => setIsOpen((prevState) => !prevState);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className='text-xl text-white bg-[#33D1AB] text-[1rem]'>
          {lang === 'id' ? 'Detail' : 'Details'}
          <TbSearch />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[450px] rounded-lg shadow-xl p-6'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-gray-800'>
            {lang === 'id' ? 'Detail Transaksi' : 'Transaction Details'}
          </DialogTitle>
          <DialogDescription className='text-sm text-gray-600 mt-1'>
            {lang === 'id' 
              ? 'Berikut adalah detail dari transaksi yang kamu pilih.' 
              : 'Here are the details of the selected transaction.'}
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 mt-4'>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Jumlah Uang' : 'Amount'}
            </p>
            <p className='mt-1 text-lg font-semibold text-gray-900'>{formatToRupiah(amount)}</p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Deskripsi' : 'Description'}
            </p>
            <p className='mt-1 text-gray-800'>
              {description || (lang === 'id' ? 'Tidak ada deskripsi' : 'No description')}
            </p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Jenis Transaksi' : 'Transaction Type'}
            </p>
            <p className='mt-1 text-gray-800 capitalize'>{transactionType}</p>
          </div>
          <div className='pb-3 border-b border-gray-300'>
            <p className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Tanggal' : 'Date'}
            </p>
            <p className='mt-1 text-gray-800'>{formatDate(date)}</p>
          </div>
        </div>
        <DialogFooter className='mt-6 flex justify-end'>
          <Button 
            onClick={() => setIsOpen(false)} 
            className='bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-md transition-all'
          >
            {lang === 'id' ? 'Tutup' : 'Close'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTransaction;
