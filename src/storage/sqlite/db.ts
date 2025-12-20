import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

export type DbHandle = Database.Database;

let cachedDb: DbHandle | null = null;

export function openDb(sharedDbPath: string): DbHandle {
  if (cachedDb) return cachedDb;

  const absolutePath = path.resolve(process.cwd(), sharedDbPath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  const db = new Database(absolutePath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  cachedDb = db;
  return db;
}

export function closeDb(): void {
  cachedDb?.close();
  cachedDb = null;
}
