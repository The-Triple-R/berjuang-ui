import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import { MdOutlineCancel } from 'react-icons/md';

const DeleteButton = ({ onDelete }) => {
  const { lang } = useLanguageStore();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='text-xl text-white bg-[#D30368] text-[1rem]'>
          {langData[lang].transactionPageTable.delete}
          <MdOutlineCancel size={24} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{langData[lang].transactionPageTable.deleteAlert.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {langData[lang].transactionPageTable.deleteAlert.desc1} <strong>{langData[lang].transactionPageTable.deleteAlert.delete}</strong> {langData[lang].transactionPageTable.deleteAlert.desc2}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='text-white bg-red-600' onClick={onDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
