# import sys
# import os
# print(os.getcwd())
# print(os.path.dirname(os.getcwd()))
# print(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
# sys.path.append('../test')

# print(sys.path)
import Kobalt_FINPR_197
# from Kobalt_FINPR_197 import UserAccount
# from ..python.Kobalt_FINPR_197 import UserAccount
import unittest

class Kobalt_FINPR_197_Testing(unittest.TestCase):

    def setUp(self):
        self.account1 =  Kobalt_FINPR_197.UserAccount('Karen', 100, True)
    
    def test_Create_New_Account(self):
        self.assertEqual('Karen',self.account1.account_id)

    def test_Check_Balance(self):

        self.assertEqual(100,self.account1.balance)

if __name__ == '__main__':
    unittest.main()