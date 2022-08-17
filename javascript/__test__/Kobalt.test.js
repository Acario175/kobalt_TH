const UserAccount = require('../Kobalt_FINPR_197');

describe('Kobalt_FINPR_197', () => {
  let account;
  const transactions = [];
  beforeAll(() => {
    account = new UserAccount('Karen', 100, true);
    transactions.push({
      transaction_id: '1230',
      account_id: 'Karen',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
    transactions.push({
      transaction_id: '1231',
      account_id: 'Karen',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
    transactions.push({
      transaction_id: '1232',
      account_id: 'Karen',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
    transactions.push({
      transaction_id: '1233',
      account_id: 'Karen',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
    transactions.push({
      transaction_id: '1234',
      account_id: 'Karl',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
  });

  it('Create New Account', (done) => {
    expect(account.account_id).toBe('Karen');
    expect(account.balance).toBe(100);
    expect(account.active).toBe(true);
    done();
  });

  it('Checking for over draft', (done) => {
    account.deductTransaction([
      {
        transaction_id: '1234',
        account_id: 'Karen',
        amount: 101,
        timestamp: Math.floor(Date.now() / 1000) / 60,
      },
    ]);
    expect(account.balance).toBe(100);
    done();
  });
  it('Checking Transaction deductions', (done) => {
    account.deductTransaction(transactions);
    expect(account.balance).toBe(70);
    done();
  });
});

describe('Kobalt_FINPR_closedAcc', () => {
  let account;
  const transactions = [];
  beforeAll(() => {
    account = new UserAccount('Karl', 1000, false);

    transactions.push({
      transaction_id: '007',
      account_id: 'Karl',
      amount: 10,
      timestamp: Math.floor(Date.now() / 1000) / 60,
    });
  });

  it('Deductions from inactive account', (done) => {
    expect(account.balance).toBe(1000);
    done();
  });
});
