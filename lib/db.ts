import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

export const DATA_DIR = path.join(process.cwd(), 'data');
export const DB_PATH = path.join(DATA_DIR, 'app.db');

export type DbUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type DbWallet = {
  id: number;
  user_id: number;
  available_balance: number;
  pending_balance: number;
  lifetime_earnings: number;
  withdrawn_amount: number;
  currency: string;
  created_at: string;
  updated_at: string;
};

export type DbOffer = {
  id: number;
  title: string;
  description: string;
  reward: number;
  category: string;
  status: string;
  created_at: string;
};

export function ensureDatabase() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const db = new Database(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'member',
      status TEXT NOT NULL DEFAULT 'active',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS wallets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL UNIQUE,
      available_balance REAL NOT NULL DEFAULT 0,
      pending_balance REAL NOT NULL DEFAULT 0,
      lifetime_earnings REAL NOT NULL DEFAULT 0,
      withdrawn_amount REAL NOT NULL DEFAULT 0,
      currency TEXT NOT NULL DEFAULT 'USD',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      amount REAL NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'pending',
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL UNIQUE,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      reward REAL NOT NULL DEFAULT 0,
      category TEXT NOT NULL DEFAULT 'General',
      status TEXT NOT NULL DEFAULT 'active',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  ensureDemoSeed();

  return db;
}

export function ensureDemoSeed() {
  const db = ensureDatabase();

  const userCount = db.prepare('SELECT COUNT(*) AS count FROM users').get() as { count: number };
  if (userCount.count === 0) {
    db.prepare(
      'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)'
    ).run('Demo User', 'demo.user@example.com', '$2a$10$QjYf2d1G6A0k1aK2qP1rNOFJkq7Y2JvLCOZpA.zM8d3bJ1Z0YPbNa', 'member', 'active');

    db.prepare(
      'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)'
    ).run('Demo Admin', 'demo.admin@example.com', '$2a$10$QjYf2d1G6A0k1aK2qP1rNOFJkq7Y2JvLCOZpA.zM8d3bJ1Z0YPbNa', 'admin', 'active');
  }

  const offerCount = db.prepare('SELECT COUNT(*) AS count FROM offers').get() as { count: number };
  if (offerCount.count === 0) {
    db.prepare(
      'INSERT INTO offers (title, description, reward, category, status) VALUES (?, ?, ?, ?, ?)'
    ).run('Profile Survey', 'Complete a short profile survey to unlock a quick reward.', 3.5, 'Survey', 'active');

    db.prepare(
      'INSERT INTO offers (title, description, reward, category, status) VALUES (?, ?, ?, ?, ?)'
    ).run('Bonus Offer', 'Complete a branded offer and earn a bonus payout.', 4.0, 'Offer', 'active');

    db.prepare(
      'INSERT INTO offers (title, description, reward, category, status) VALUES (?, ?, ?, ?, ?)'
    ).run('Daily Check-In', 'Claim today\'s daily reward for a small bonus payout.', 1.0, 'Daily', 'active');
  }

  const demoUser = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.user@example.com') as { id: number } | undefined;
  if (demoUser) {
    const wallet = db.prepare('SELECT id FROM wallets WHERE user_id = ?').get(demoUser.id) as { id: number } | undefined;
    if (!wallet) {
      db.prepare(
        'INSERT INTO wallets (user_id, available_balance, pending_balance, lifetime_earnings, withdrawn_amount, currency) VALUES (?, ?, ?, ?, ?, ?)'
      ).run(demoUser.id, 124.8, 18.2, 1240.0, 25.0, 'USD');
    }
  }

  const adminUser = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.admin@example.com') as { id: number } | undefined;
  if (adminUser) {
    const wallet = db.prepare('SELECT id FROM wallets WHERE user_id = ?').get(adminUser.id) as { id: number } | undefined;
    if (!wallet) {
      db.prepare(
        'INSERT INTO wallets (user_id, available_balance, pending_balance, lifetime_earnings, withdrawn_amount, currency) VALUES (?, ?, ?, ?, ?, ?)'
      ).run(adminUser.id, 0, 0, 0, 0, 'USD');
    }
  }
}

export function getUserByEmail(email: string): DbUser | null {
  const db = ensureDatabase();
  const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as DbUser | undefined;
  return row ?? null;
}

export function getUserById(userId: number): DbUser | null {
  const db = ensureDatabase();
  const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId) as DbUser | undefined;
  return row ?? null;
}

export function createUser({
  name,
  email,
  password,
  role = 'member'
}: {
  name: string;
  email: string;
  password: string;
  role?: string;
}) {
  const db = ensureDatabase();

  const existing = getUserByEmail(email);
  if (existing) {
    return null;
  }

  const result = db.prepare(
    'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)'
  ).run(name, email, password, role, 'active');

  const userId = Number(result.lastInsertRowid);

  const walletRow = db.prepare('SELECT id FROM wallets WHERE user_id = ?').get(userId);
  if (!walletRow) {
    db.prepare(
      'INSERT INTO wallets (user_id, available_balance, pending_balance, lifetime_earnings, withdrawn_amount, currency) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(userId, 0, 0, 0, 0, 'USD');
  }

  return getUserById(userId);
}

export function getWalletByUserId(userId: number): DbWallet | null {
  const db = ensureDatabase();
  const row = db.prepare('SELECT * FROM wallets WHERE user_id = ?').get(userId) as DbWallet | undefined;
  return row ?? null;
}

export function getTransactionsByUser(userId: number, limit = 10) {
  const db = ensureDatabase();
  return db.prepare(
    'SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT ?'
  ).all(userId, limit) as Array<{
    id: number;
    user_id: number;
    type: string;
    amount: number;
    status: string;
    description: string | null;
    created_at: string;
  }>;
}

export function listOffers() {
  const db = ensureDatabase();
  return db.prepare('SELECT * FROM offers WHERE status = ? ORDER BY id ASC').all('active') as DbOffer[];
}

export function addTransaction({
  userId,
  type,
  amount,
  status = 'pending',
  description = null
}: {
  userId: number;
  type: string;
  amount: number;
  status?: string;
  description?: string | null;
}) {
  const db = ensureDatabase();
  const result = db.prepare(
    'INSERT INTO transactions (user_id, type, amount, status, description) VALUES (?, ?, ?, ?, ?)'
  ).run(userId, type, amount, status, description ?? null);

  const wallet = getWalletByUserId(userId);
  if (!wallet) {
    return Number(result.lastInsertRowid);
  }

  if (status === 'approved' || status === 'paid') {
    const updatedBalance = Number(wallet.available_balance) + Number(amount);
    db.prepare(
      'UPDATE wallets SET available_balance = ?, lifetime_earnings = lifetime_earnings + ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?'
    ).run(updatedBalance, amount, userId);
  }

  return Number(result.lastInsertRowid);
}

export function getDashboardStats(userId: number) {
  const wallet = getWalletByUserId(userId);
  const transactions = getTransactionsByUser(userId, 5);

  return {
    wallet,
    transactions,
    totalEarnings: wallet ? Number(wallet.lifetime_earnings) : 0,
    availableBalance: wallet ? Number(wallet.available_balance) : 0,
    pendingBalance: wallet ? Number(wallet.pending_balance) : 0
  };
}

export function getAdminSummary() {
  const db = ensureDatabase();
  const users = db.prepare('SELECT COUNT(*) AS count FROM users').get() as { count: number };
  const wallets = db.prepare('SELECT SUM(available_balance) AS total FROM wallets').get() as { total: number | null };
  const transactions = db.prepare('SELECT COUNT(*) AS count FROM transactions').get() as { count: number };

  return {
    totalUsers: users.count,
    totalBalance: Number(wallets.total ?? 0),
    totalTransactions: transactions.count
  };
}
