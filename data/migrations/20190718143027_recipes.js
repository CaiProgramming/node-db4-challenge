exports.up = function(knex) {
  return (
    knex.schema
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl
          .text("recipe_name", 128)
          .unique()
          .notNullable();
        tbl.text("author", 128).notNullable();
      })
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl
          .text("name", 128)
          .unique()
          .notNullable();
      })
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      .createTable("measurements", tbl => {
        tbl.increments();
        tbl
          .text("name", 128)
          .unique()
          .notNullable();
      })
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl.integer("quantity").notNullable();
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        tbl
          .integer("measurement_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("measurements")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
      .createTable("recipe_instructions", tbl => {
        tbl.increments();
        tbl.integer("step").notNullable();
        tbl.text("text").notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("measurements")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipe_instructions");
};
