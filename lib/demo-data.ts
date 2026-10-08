export type UserRecord = {
  id: number;
  name: string;
  email: string;
  role: 'member' | 'admin' | 'support';
  status: 'active' | 'suspended';
  balance: number;
};

export const demoUsers: UserRecord[] = [
  { id: 1, name: 'Demo User', email: 'demo.user@example.com', role: 'member', status: 'active', balance: 124.8 },
  { id: 2, name: 'Demo Admin', email: 'demo.admin@example.com', role: 'admin', status: 'active', balance: 0 },
  { id: 3, name: 'Support Bot', email: 'support@example.com', role: 'support', status: 'active', balance: 0 }
];
