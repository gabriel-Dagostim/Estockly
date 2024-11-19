import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  return open({
    filename: './database.sqlite', // Caminho do banco de dados
    driver: sqlite3.Database,
  });
}
