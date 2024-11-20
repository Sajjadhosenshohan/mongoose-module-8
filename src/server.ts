import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string, {
      tls: true,
    });
    // console.log(config.database_url, typeof (config.port))
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}
main();
