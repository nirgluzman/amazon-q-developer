type Account = {
  accountId: string;
  accountType: 'savings' | 'checking' | 'credit';
  balance: number;
  currency: string;
  openedDate: Date;
  isActive: boolean;
};

const accounts: Account[] = [
  {
    accountId: '4729183056',
    accountType: 'savings',
    balance: 5000,
    currency: 'USD',
    openedDate: new Date('2025-02-22'),
    isActive: true,
  },
  {
    accountId: '8351624790',
    accountType: 'checking',
    balance: 2000,
    currency: 'USD',
    openedDate: new Date('2026-01-12'),
    isActive: true,
  },
  {
    accountId: '2946817305',
    accountType: 'credit',
    balance: -500,
    currency: 'USD',
    openedDate: new Date('2023-08-16'),
    isActive: true,
  },
];

// Function to get account details by accountId
function getAccountByName(accounts: Account[], name: string): Account[] {
  return accounts.filter((account) => account.accountId === name);
}
