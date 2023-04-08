import Transaction from '@models/Transaction';
import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions: Ref<Transaction[]> = ref([]);

  return {
    transactions,
  };
});
