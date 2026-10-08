import { ensureDatabase } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

const db = ensureDatabase();

const adminExists = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.admin@example.com');
if (!adminExists) {
  db.prepare(
    'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)'
  ).run('Demo Admin', 'demo.admin@example.com', hashPassword('ChangeMe_Admin_2026!'), 'admin', 'active');
}

const userExists = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.user@example.com');
if (!userExists) {
  db.prepare(
    'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)'
  ).run('Demo User', 'demo.user@example.com', hashPassword('ChangeMe_User_2026!'), 'member', 'active');
}

const userRow = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.user@example.com');
if (userRow) {
  const walletExists = db.prepare('SELECT id FROM wallets WHERE user_id = ?').get(userRow.id);
  if (!walletExists) {
    db.prepare('INSERT INTO wallets (user_id, available_balance, pending_balance, lifetime_earnings) VALUES (?, ?, ?, ?)')
      .run(userRow.id, 124.8, 18.2, 1240.0);
  }
}

const adminRow = db.prepare('SELECT id FROM users WHERE email = ?').get('demo.admin@example.com');
if (adminRow) {
  const walletExists = db.prepare('SELECT id FROM wallets WHERE user_id = ?').get(adminRow.id);
  if (!walletExists) {
    db.prepare('INSERT INTO wallets (user_id, available_balance, pending_balance, lifetime_earnings) VALUES (?, ?, ?, ?)')
      .run(adminRow.id, 0, 0, 0);
  }
}

console.log('Seed data initialized.');
