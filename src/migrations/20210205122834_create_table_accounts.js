exports.up = (knex) => {
  return knex.schema.createTable('accounts', (t) => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.integer('user_id').notNull().unsigned();
    t.foreign('user_id').references('users.id');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('accounts');
};
