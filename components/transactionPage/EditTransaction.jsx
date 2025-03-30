import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { TbEdit } from 'react-icons/tb';
import axios from 'axios';
import useUpdateTransactions from '@/app/hooks/useUpdateTransactions';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import toast from 'react-hot-toast';
import toastConfig from '@/lib/react-hot-toast/toastConfig';

const formatRupiah = (value) => {
  if (!value) return '';
  return parseInt(value.replace(/\D/g, ''), 10).toLocaleString('id-ID');
};

const EditTransaction = ({ id, amount, description, transactionType, currentPage }) => {
  const [moneyValueInput, setMoneyValueInput] = useState(formatRupiah(amount.toString()));
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateTransactions = useUpdateTransactions();

  const { lang } = useLanguageStore();

  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions/${id}`,
        {
          amount: Number(moneyValueInput.replace(/\./g, '')),
          description: descriptionInput,
          transactionType,
        },
        {
          withCredentials: true,
        }
      );

      updateTransactions(transactionType, currentPage);

      setIsOpen(false);

      toast.success(langData[lang].toast.successUpdate, toastConfig);
    } catch (error) {
      toast.error(langData[lang].toast.errorUpdate, toastConfig);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoneyValueInputChanges = (e) => {
    let rawValue = e.target.value.replace(/\D/g, '');
    let numericValue = Number(rawValue);

    if (numericValue > 1_000_000_000_000) {
      numericValue = 1_000_000_000_000;
    }

    setMoneyValueInput(formatRupiah(numericValue.toString()));
  };

  const handledescriptionInputChanges = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleSetDefaultInput = () => {
    setMoneyValueInput(formatRupiah(amount.toString()));
    setDescriptionInput(description);
  };

  const handleOpenChange = () => setIsOpen((prevState) => !prevState);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className='text-xl text-white bg-[#4D4FED] text-[1rem]' onClick={handleSetDefaultInput}>
          {lang == "id" ? "Ubah" : "Edit"}
          <TbEdit size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[450px] rounded-lg shadow-xl p-6'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-gray-800'>Ubah Transaksi</DialogTitle>
          <DialogDescription className='text-sm text-gray-600 mt-1'>
          {langData[lang].transactionPageTable.editPopup.description} <b>{langData[lang].transactionPageTable.editPopup.description2}</b>
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 mt-4'>
          <div>
            <Label htmlFor='moneyValue' className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Jumlah Uang' : 'Money Value'}
            </Label>
            <Input 
              id='moneyValue' 
              onChange={handleMoneyValueInputChanges} 
              value={moneyValueInput} 
              className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-[#4D4FED] focus:outline-none transition-all'
              type='text' 
              placeholder={lang === 'id' ? 'Edit jumlah uang' : 'Edit money value'}
            />
          </div>
          <div className=''>
            <Label htmlFor='description' className='text-sm font-medium text-gray-700'>
              {lang === 'id' ? 'Deskripsi' : 'Description'}
            </Label>
            <textarea
              onChange={handledescriptionInputChanges}
              value={descriptionInput}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-[#4D4FED] focus:outline-none transition-all resize-none h-24 placeholder-gray-400'
              id='description'
              placeholder={lang === 'id' ? 'Edit deskripsi transaksi' : 'Edit transaction description'}
            />
          </div>
        </div>
        <DialogFooter className="flex justify-between items-center mt-6">
          <Button 
            onClick={() => setIsOpen(false)} 
            className="bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-md transition-all"
          >
            {lang === 'id' ? 'Batal' : 'Cancel'}
          </Button>
          <Button 
            onClick={handleSaveChanges} 
            disabled={isLoading || moneyValueInput < 1}
            className={`px-5 py-2 rounded-md font-semibold transition-all ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'shadow-md'
            }`}
          >
            {isLoading ? lang === 'id' ? 'Menyimpan!' : 'Processing...' : lang === 'id' ? 'Ubah Transaksi!' : 'Edit Transaction!'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTransaction;
