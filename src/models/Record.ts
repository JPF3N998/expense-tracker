interface RecordOptions {
  currency: string
  description?: string | undefined
  emoji?: string | undefined
}

export default class Record {
  name: string;
  amount: number;
  description: string | undefined;
  emoji: string | undefined;
  currency: string;

  constructor(name: string, amount: number, options: RecordOptions) {
    const { currency = 'USD', description, emoji } = options;

    this.name = name;
    this.amount = amount;
    this.currency = currency;

    this.description = description;
    this.emoji = emoji
  }
}

// Potential Currency feature improvement: https://www.npmjs.com/package/currency-codes
// + Add select dropdown
// + Real-time currency converter