exports.up = function(knex) {
    return knex.schema.createTable('employees', table => {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('email').notNull().unique();
        table.string('register_number').notNull().unique();
        table.datetime('create_at').notNull();
        table.datetime('delete_at');
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('employees');
};
