import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data.source';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
  NODE_ENV,
  PORT,
  LOG_DIR,
  LOG_FORMAT,
  API_VERSION,
  ORIGIN,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  JWT_SECRET,
} = process.env;

export abstract class ConfigServer {
  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
