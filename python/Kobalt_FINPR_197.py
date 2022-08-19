class UserAccount:
  def __init__(this, account_id, balance, active):
    this.account_id = account_id
    this.balance = balance
    this.active = active
    this.accountTransactions = []

  def deductTransaction(this,transactions):
    print(transactions)
    for transaction in transactions:
        print(transaction)
        if (this.account_id == transaction['account_id'] and this.active and transaction['amount'] <= this.balance):
            if (len(this.accountTransactions)<2):
                this.accountTransactions.insert(0,transaction)
                this.balance -= transaction['amount']
            elif (transaction['timestamp'] - this.accountTransactions[1]['timestamp'] > 5 ) :
                this.accountTransactions.insert(0,transaction)
                this.balance -= transaction['amount']
            else:
              print('Transaction Error')
              return 'Transaction Error'
        print(this.accountTransactions)

                           

# account1 =  UserAccount('Karen', 100, True)

# print(account1.account_id)
# account1.deductTransaction(["apple", "banana", "cherry",{
#   'transaction_id': '1231',
#   'account_id': 'Karen',
#   'amount': 10,
#   'timestamp': 27679677,
# }])
