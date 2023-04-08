import { describe, expect, it } from 'vitest';
//FIXME - Path alias ESLint error
// https://stackoverflow.com/questions/72468249/vitest-src-folder-alias-not-resolved-in-test-files
// import Transaction from '@models/Transaction';
import Transaction from '@models/Transaction';

describe('Transaction Class', () => {
  it('should create a basic Transaction instance with correct props', () => {
    const expectedTransaction = {
      id: '',
      name: 'New phone',
      amount: 999.99,
      currency: 'USD',
      details: '',
      date: '2023-4-7',
    };

    const tx = new Transaction(
      expectedTransaction.name,
      expectedTransaction.amount,
      expectedTransaction.date
    );

    expectedTransaction.id = tx.getId();

    expect(tx).toEqual(expectedTransaction);
  });
});
