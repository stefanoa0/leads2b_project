// Update with your config settings.

module.exports = {

  development: {
     client: 'postgresql',
    connection: {
      database: 'leads2b',
      user:     'postgres',
      password: 'Postgres!',
      port:     '5433'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'leads2b_stage',
      user:     'postgres',
      password: 'Postgres!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'leads2b_prod',
      user:     'postgres',
      password: 'Postgres!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
