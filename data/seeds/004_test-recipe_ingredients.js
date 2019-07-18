exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { quantity: 1, ingredient_id: 1, measurement_id: 1, recipe_id: 1 },
        { quantity: 1, ingredient_id: 3, measurement_id: 6, recipe_id: 1 },
        { quantity: 1, ingredient_id: 2, measurement_id: 1, recipe_id: 2 },
        { quantity: 1, ingredient_id: 3, measurement_id: 6, recipe_id: 2 }
      ]);
    });
};
