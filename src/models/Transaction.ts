interface TransactionOptions {
  details?: string | undefined;
  emoji?: string | undefined;
}

export default class Transaction {
  name: string;
  amount: number;
  details: string;
  emoji: string | undefined;
  currency: string;
  date!: Date;

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

    this.setDate(date);

    if (options) {
      const { details = '', emoji } = options;
      this.details = details;
      this.emoji = emoji;
    }
  }

  /**
   *
   * @param dateIn string in "YYYY-mm-dd" format
   */
  private setDate(dateIn: string) {
    let year, month, day;

    // NOTE: Date expects month index, not actual month number

    if (dateIn) {
      [year, month, day] = dateIn.split('-');
      this.date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      const date = new Date();
      [year, month, day] = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ];
      this.date = new Date(year, month, day);
    }
  }
}

// Potential Currency feature improvement: https://www.npmjs.com/package/currency-codes
// + Add select dropdown
// + Real-time currency converter
