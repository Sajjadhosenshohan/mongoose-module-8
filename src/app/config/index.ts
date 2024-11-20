import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const IntPort = parseInt(process.env.PORT || '3000');

export default {
  port: IntPort,
  database_url: process.env.DATABASE_URL || '',
};
