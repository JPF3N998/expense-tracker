import Transaction from '@models/Transaction';
import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

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
