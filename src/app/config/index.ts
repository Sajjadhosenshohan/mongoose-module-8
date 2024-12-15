import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const IntPort = parseInt(process.env.PORT || '3000');

export default {
  port: IntPort,
  database_url: process.env.DATABASE_URL || '',
  hash_salt_round: process.env.hash_salt_round || '',
  default_password: process.env.DEFAULT_PASS || '',
};
