import Kobalt_FINPR_197
import unittest

class Kobalt_FINPR_197_Testing(unittest.TestCase):

    def setUp(self):
        self.account1 =  Kobalt_FINPR_197.UserAccount('Karen', 100, True)
        self.transactions = [
        {
      'transaction_id': '1230',
      'account_id': 'Karen',
      'amount': 10,
      'timestamp': 27679676,
    },
        {
      'transaction_id': '1231',
      'account_id': 'Karen',
      'amount': 10,
      'timestamp': 27679678,
    },
        {
      'transaction_id': '1232',
      'account_id': 'Andy',
      'amount': 10,
      'timestamp': 27679679,
    },
        {
      'transaction_id': '1233',
      'account_id': 'Karen',
      'amount': 10,
      'timestamp': 27679679,
    },
        {
      'transaction_id': '1234',
      'account_id': 'Karen',
      'amount': 10,
      'timestamp': 27679689,
    },
    ]
    
    def test_Create_New_Account(self):
        self.assertEqual('Karen',self.account1.account_id)

    def test_Check_Balance(self):
        templst = self.account1.deductTransaction(self.transactions)
        self.assertEqual(70,self.account1.balance)
        self.assertEqual(3,len(templst))
    

if __name__ == '__main__':
    unittest.main()