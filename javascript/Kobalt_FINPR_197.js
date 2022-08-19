class UserAccount {
  constructor(account_id, balance, active) {
    this.account_id = account_id;
    this.balance = balance;
    this.active = active;
    this.transactions = [];
  }

  deductTransaction(transactions) {
    for (let idx in transactions) {
      // Verify Account Cred.
      if (
        this.account_id === transactions[idx].account_id &&
        this.active &&
        transactions[idx].amount <= this.balance
      ) {
        // Checks how many transactions
        if (this.transactions.length < 2) {
          this.transactions.unshift(transactions[idx]);
          this.balance -= transactions[idx].amount;
        }
        // Compares 3rd item's timestamp to current transaction timestamp
        else if (
          transactions[idx].timestamp - this.transactions[1].timestamp >
          5
        ) {
          this.transactions.unshift(transactions[idx]);
          this.balance -= transactions[idx].amount;
        }
      }
    }
  }
}

module.exports = UserAccount;
