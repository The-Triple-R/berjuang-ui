const { default: useTransactionStore } = require('@/lib/zustand/useTransactionStore');
const { default: axios } = require('axios');
const { useEffect } = require('react');

const useTransactions = (type) => {
  const { transactionsIn, setTransactionsIn, paginationTransactionsIn, setPaginationTransactionsIn, transactionsOut, setTransactionsOut, paginationTransactionsOut, setPaginationTransactionsOut } = useTransactionStore((state) => state);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transactions?filter=${type}`, {
          withCredentials: true,
        });

        if (type === 'debit') {
          setTransactionsIn(data.data);
          setPaginationTransactionsIn(data.paging);
        } else {
          setTransactionsOut(data.data);
          setPaginationTransactionsOut(data.paging);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransaction();

    return () => {
      setTransactionsIn([]);
      setPaginationTransactionsIn(null);
    };
  }, []);

  if (type === 'debit') {
    return { transactionsIn, paginationTransactionsIn };
  } else {
    return { transactionsOut, paginationTransactionsOut };
  }
};

export default useTransactions;
