'use client';
import useUpdateTransactions from '@/app/hooks/useUpdateTransactions';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';

const TransactionPopup = ({ isOpen, onClose, title = 'Tambah Transaksi', transactionType, paging }) => {
  const [currencyInput, setCurrencyInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const updateTransactions = useUpdateTransactions();

  const handleCurrencyChange = (event) => {
    setCurrencyInput(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionInput(event.target.value);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const payload = {
        transactionType,
        amount: parseInt(currencyInput),
        description: descriptionInput,
      };
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, payload, {
        withCredentials: true,
      });

      if (status === 201) {
        updateTransactions(transactionType, paging?.currentPage);

        onClose();
        setCurrencyInput('');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-lg font-bold mb-4'>{title}</h2>
        <input onChange={handleCurrencyChange} value={currencyInput} type='number' placeholder='Nominal' className='w-full px-3 py-2 border rounded-md mb-3' />
        <textarea onChange={handleDescriptionChange} value={descriptionInput} type='text' placeholder='Deskripsi' className='w-full px-3 py-2 border rounded-md mb-3' />
        <div className='flex justify-end gap-2'>
          <Button className='bg-gray-500 text-white' onClick={onClose} disabled={isLoading}>
            Batal
          </Button>
          <Button className='bg-[#01669E] text-white' onClick={handleSave} disabled={isLoading}>
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPopup;
