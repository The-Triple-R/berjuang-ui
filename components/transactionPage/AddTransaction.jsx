import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { TbEdit } from 'react-icons/tb';
import axios from 'axios';
import useUpdateTransactions from '@/app/hooks/useUpdateTransactions';

const formatRupiah = (value) => {
  if (!value) return '';
  return parseInt(value.replace(/\D/g, ''), 10).toLocaleString('id-ID');
};

const AddTransaction = ({ transactionType, paging }) => {
  const [moneyValueInput, setMoneyValueInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateTransactions = useUpdateTransactions();

  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);
      console.log(paging);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
        {
          amount: Number(moneyValueInput.replace(/\./g, '')), // convert misal 10.000 menjadi 10000
          description: descriptionInput,
          transactionType,
        },
        {
          withCredentials: true,
        }
      );

      updateTransactions(transactionType, paging.currentPage);

      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoneyValueInputChanges = (e) => {
    let rawValue = e.target.value.replace(/\D/g, ''); // Hanya angka

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
    setMoneyValueInput('');
    setDescriptionInput('');
  };

  const handleOpenChange = () =>
    setIsOpen((prevState) => {
      return !prevState;
    });

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className='text-xl text-white bg-[#01669E] text-[1rem]' onClick={handleSetDefaultInput}>
          Tambah
          <TbEdit size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Tambah transaksi</DialogTitle>
          <DialogDescription>Tambah data transaksi mu. <br></br> Jika sudah klik "Tambah transaksi!" ya!</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <div>
            <Label htmlFor='moneyValue' className='block mb-2'>
              Jumlah Uang
            </Label>
            <Input id='moneyValue' onChange={handleMoneyValueInputChanges} value={moneyValueInput} className='col-span-3' type='text' />
          </div>
          <div className=''>
            <Label htmlFor='description' className='block mb-2'>
              Deskripsi
            </Label>
            <textarea
              onChange={handledescriptionInputChanges}
              defaultValue={descriptionInput}
              className='w-full rounded-base border-2 text-text font-base selection:bg-main selection:text-mtext border-border bg-bw px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 '
              id='description'
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSaveChanges} disabled={isLoading}>
            Tambah transaksi!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransaction;
