import Dexie, { Table } from "dexie";
import Transaction from "@models/Transaction";

const DATABASE_NAME = 'Transactions'

// LINK Dexie + Vue: https://dexie.org/docs/Tutorial/Vue
// Dexie Docs: https://dexie.org/docs/

export class TransactionsDexieDatabase extends Dexie {
    transactions!: Table<Transaction>;

    constructor() {
        super(DATABASE_NAME)
        this
            .version(1)
            .stores({
                transactions: '++id, date'
            })
    }
}

export const transactionsDBService = new TransactionsDexieDatabase()