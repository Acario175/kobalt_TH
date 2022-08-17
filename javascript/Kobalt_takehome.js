class UserAccount {
  constructor(account_id, balance, active) {
    this.account_id = account_id;
    this.balance = balance;
    this.active = active;
    this.transactions = [];
  }

  deductTransaction(transactions) {
    for (let idx in transactions) {
      if (
        this.account_id === transactions[idx].account_id &&
        this.active &&
        transactions[idx].amount <= this.balance
      ) {
        if (!this.transactions[2]) {
          this.transactions.unshift(transactions[idx]);
          this.balance -= transactions[idx].amount;
        } else if (
          transactions[idx].timestamp - this.transactions[2].timestamp > 5 &&
          this.transactions[2]
        ) {
          this.transactions.unshift(transactions[idx]);
          this.balance -= transactions[idx].amount;
        }
      }
    }
  }
}

class allTransactions {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

const account1 = new UserAccount('Karen', 100, true);

const kobaltTransactions = new allTransactions();

kobaltTransactions.addTransaction({
  transaction_id: '1230',
  account_id: 'Karen',
  amount: 10,
  timestamp: Math.floor(Date.now() / 1000) / 60,
});

kobaltTransactions.addTransaction({
  transaction_id: '1231',
  account_id: 'Karen',
  amount: 10,
  timestamp: Math.floor(Date.now() / 1000) / 60,
});

kobaltTransactions.addTransaction({
  transaction_id: '1232',
  account_id: 'Karen',
  amount: 10,
  timestamp: Math.floor(Date.now() / 1000) / 60,
});

kobaltTransactions.addTransaction({
  transaction_id: '1233',
  account_id: 'Karen',
  amount: 10,
  //   timestamp: Math.floor(Date.now() / 1000) / 60,
  timestamp: 27679434,
});
kobaltTransactions.addTransaction({
  transaction_id: '1234',
  account_id: 'Karl',
  amount: 10,
  timestamp: Math.floor(Date.now() / 1000) / 60,
});

console.log(account1);
// console.log(kobaltTransactions.transactions);

account1.deductTransaction(kobaltTransactions.transactions);
console.log(account1);
