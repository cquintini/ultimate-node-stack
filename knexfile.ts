import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
  },
};

export default config;
