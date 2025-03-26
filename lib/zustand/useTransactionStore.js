const { create } = require('zustand');

const useTransactionStore = create((set) => ({
  transactionsIn: [],
  setTransactionsIn: (data) => {
    set(() => ({
      transactionsIn: data,
    }));
  },
  paginationTransactionsIn: null,
  setPaginationTransactionsIn: (data) => {
    set(() => ({
      paginationTransactionsIn: data,
    }));
  },

  transactionsOut: [],
  setTransactionsOut: (data) => {
    set(() => ({
      transactionsOut: data,
    }));
  },
  paginationTransactionsOut: null,
  setPaginationTransactionsOut: (data) => {
    set(() => ({
      paginationTransactionsOut: data,
    }));
  },
}));

export default useTransactionStore;
