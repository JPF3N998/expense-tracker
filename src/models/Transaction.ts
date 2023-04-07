interface TransactionOptions {
  details?: string | undefined
  emoji?: string | undefined
}

export default class Transaction {
  name: string;
  amount: number;
  details: string;
  emoji: string | undefined;
  currency: string;

  constructor(name: string, amount: number, currency: string = 'USD', options?: TransactionOptions) {
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.details = '';

    if (options) {
      const { details = '', emoji } = options;
      this.details = details;
      this.emoji = emoji;
    }
  }
}

// Potential Currency feature improvement: https://www.npmjs.com/package/currency-codes
// + Add select dropdown
// + Real-time currency converter