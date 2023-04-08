import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import Transaction from '@models/Transaction';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions: Ref<Transaction[]> = ref([]);

  function commitNewTransaction(newTransaction: Transaction) {
    transactions.value.push(newTransaction);
  }

  return {
    // State
    transactions,

    // Actions
    commitNewTransaction,
  };
});
