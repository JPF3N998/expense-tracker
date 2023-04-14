interface TransactionOptions {
  id?: string,
  details?: string | undefined;
  emoji?: string | undefined;
}

export default class Transaction {
  id: string;
  name: string;
  amount: number;
  details: string;
  emoji: string | undefined;
  currency: string;
  date!: string;

  constructor(
    name: string,
    amount: number,
    date: string,
    currency: string = 'USD',
    options?: TransactionOptions
  ) {
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.details = '';
    this.date = date;

    this.id = options?.id ? options.id : crypto.randomUUID()

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
