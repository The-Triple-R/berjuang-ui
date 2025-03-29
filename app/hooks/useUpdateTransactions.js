const { default: useTransactionStore } = require('@/lib/zustand/useTransactionStore');
const { default: axios } = require('axios');

const useUpdateTransactions = () => {
  const { setTransactionsIn, setTransactionsOut, setPaginationTransactionsIn, setPaginationTransactionsOut } = useTransactionStore((state) => state);

  const fetchTransaction = async (type, page = 1) => {
    try {
      const { data: updatedData } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transactions?filter=${type}${page ? `&page=${page}` : ''}`, { withCredentials: true });
      if (type === 'debit') {
        setTransactionsIn(updatedData.data);
        setPaginationTransactionsIn(updatedData.paging);
      } else {
        setTransactionsOut(updatedData.data);
        setPaginationTransactionsOut(updatedData.paging);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return fetchTransaction;
};

export default useUpdateTransactions;
