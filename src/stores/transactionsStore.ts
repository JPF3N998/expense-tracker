import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import Transaction from '@models/Transaction';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions: Ref<Transaction[]> = ref([]);

  for (let i = 0; i < 20; i++) {
    transactions.value.push(
      new Transaction('Test' + i, 100 * i, '2023-04-11', undefined, {
        details: 'Test #' + i,
      })
    );
  }

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
