class UserAccount:
  def __init__(this, account_id, balance, active):
    this.account_id = account_id
    this.balance = balance
    this.active = active
    this.accountTransactions = []

  def deductTransaction(this,transactions):
    for transaction in transactions:
      # Verify Account Cred.
      if (this.account_id == transaction['account_id'] and this.active and transaction['amount'] <= this.balance):
        # Checks how many transactions in list
        if (len(this.accountTransactions) < 2):
          this.accountTransactions.insert(0,transaction)
          this.balance -= transaction['amount']
        # Compares 2nd item's timestamp to current  transaction timestamp 
        elif (transaction['timestamp'] - this.accountTransactions[1]['timestamp'] > 5 ) :
          this.accountTransactions.insert(0,transaction)
          this.balance -= transaction['amount']
        else:
          print('Transaction Error')
          # return 'Transaction Error'
          continue
    return this.accountTransactions
