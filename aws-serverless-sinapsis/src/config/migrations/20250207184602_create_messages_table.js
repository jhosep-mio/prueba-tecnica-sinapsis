exports.up = function (knex) {
  return knex.schema.createTable("messages", (table) => {
    table.increments("id").primary();
    table
      .integer("campaign_id")
      .unsigned()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE");
    table.string("phone").notNullable();
    table.text("text").notNullable();
    table.integer("shipping_status").defaultTo(1); // 1: pendiente, 2: enviado, 3: error
    table.date("process_date");
    table.time("process_hour");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("messages");
};
