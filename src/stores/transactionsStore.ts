import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import Transaction from '@models/Transaction';
import { transactionsDBService } from '@services/transactionsDBService';

const transactionSortByDate = (a: Transaction, b: Transaction) => {
  if (a.date > b.date) {
    return 1
  } else if (a.date < b.date) {
    return -1
  }
  return 0
}

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions: Ref<Transaction[]> = ref([]);

  async function commitNewTransaction(newTransaction: Transaction) {
      await insertToDatabase(newTransaction)
      transactions.value.push(newTransaction);
      transactions.value.sort(transactionSortByDate)
  }

  async function deleteTransaction(transactionId: string) {
    await deleteFromDatabase(transactionId)
    const index = transactions.value.findIndex((transaction) => transaction.id === transactionId);
    transactions.value.splice(index, 1)
    transactions.value.sort(transactionSortByDate)
  }

  async function insertToDatabase(transaction: Transaction) {
    try {
      await transactionsDBService.transactions.add(transaction)
    } catch(e) {
      throw e
    }
  }

  async function deleteFromDatabase(transactionId: string) {
    try {
      await transactionsDBService.transactions.delete(transactionId)
    } catch(e) {
      throw e
    }
  }

  async function loadFromDatabase() {
    try {
      const transactionsFromDB = await transactionsDBService.transactions.orderBy('date').toArray()
      transactions.value = transactionsFromDB
        .map((transaction: Transaction) => new Transaction(
          transaction.name, 
          transaction.amount, 
          transaction.date, 
          transaction.currency,
          {
            details: transaction.details,
            emoji: transaction.emoji,
            id: transaction.id
          })
        )
    } catch(e) {
      throw e
    }
  }

  return {
    // State
    transactions,

    // Actions
    commitNewTransaction,
    deleteTransaction,
    loadFromDatabase
  };
});
