import { Button } from '@/components/ui/button';

const TransactionPopup = ({ isOpen, onClose, title = 'Tambah Transaksi' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{ title }</h2>
        <input type="text" placeholder="Nominal" className="w-full px-3 py-2 border rounded-md mb-3" />
        <div className="flex justify-end gap-2">
          <Button className="bg-gray-500 text-white" onClick={onClose}>Batal</Button>
          <Button className="bg-[#01669E] text-white">Simpan</Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPopup;
