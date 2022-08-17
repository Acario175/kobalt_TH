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

module.exports = UserAccount;
