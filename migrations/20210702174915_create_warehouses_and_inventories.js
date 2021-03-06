exports.up = function (knex) {
  return knex.schema.createTable('warehouses', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('country').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('warehouses');
};
