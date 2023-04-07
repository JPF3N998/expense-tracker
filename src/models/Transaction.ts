interface TransactionOptions {
  currency: string
  details?: string | undefined
  emoji?: string | undefined
}

export default class Transaction {
  name: string;
  amount: number;
  details: string;
  emoji: string | undefined;
  currency: string;

  constructor(name: string, amount: number, options: TransactionOptions) {
    const { currency = 'USD', details = '', emoji } = options;

    this.name = name;
    this.amount = amount;
    this.currency = currency;

    this.details = details;
    this.emoji = emoji
  }
}

// Potential Currency feature improvement: https://www.npmjs.com/package/currency-codes
// + Add select dropdown
// + Real-time currency converter