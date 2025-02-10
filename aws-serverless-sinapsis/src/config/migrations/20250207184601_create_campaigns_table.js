exports.up = function (knex) {
  return knex.schema.createTable("campaigns", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.date("process_date");
    table.time("process_hour");
    table.integer("process_status").defaultTo(1); // 1: pendiente, 2: en proceso, 3: finalizada
    table.text("phone_list").notNullable();
    table.text("message_text").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("campaigns");
};
