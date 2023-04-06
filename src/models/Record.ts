interface RecordOptions {
  description?: string | undefined
  emoji?: string | undefined
}

export default class Record {
  name: string;
  amount: number;
  description: string | undefined;
  emoji: string | undefined;

  constructor(name: string, amount: number, options: RecordOptions) {
    const { description, emoji } = options;

    this.name = name;
    this.amount = amount;

    this.description = description;
    this.emoji = emoji
  }
}
