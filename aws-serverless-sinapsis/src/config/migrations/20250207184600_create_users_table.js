exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table
      .integer("customer_id")
      .unsigned()
      .references("id")
      .inTable("customers")
      .onDelete("CASCADE");
    table.string("username").notNullable();
    table.boolean("status").defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
