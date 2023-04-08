import { beforeEach, describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTransactionsStore } from '@stores/transactionsStore';
import Transaction from '@models/Transaction';

// LINK Guide to test Pinia stores: https://pinia.vuejs.org/cookbook/testing.html

describe('Transactions Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize with an empty array of transactions', () => {
    const transactionsStore = useTransactionsStore();
    expect(Array.isArray(transactionsStore.transactions)).toBe(true);
    expect(transactionsStore.transactions.length).toEqual(0);
  });

  it('should register passed transaction to transactions array', () => {
    const transactionsStore = useTransactionsStore();
    const newTx = new Transaction('New phone', 999.99, '2023-04-07');

    expect(transactionsStore.transactions.length).toEqual(0);

    transactionsStore.commitNewTransaction(newTx);

    expect(transactionsStore.transactions.length).toEqual(1);
  });
});
