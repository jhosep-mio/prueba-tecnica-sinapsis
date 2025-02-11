exports.up = function (knex) {
  return knex.schema.createTable("customers", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.boolean("status").defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("customers");
};
