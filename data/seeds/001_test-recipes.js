exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Cooked Porkchop",
          author: "Notch"
        },
        {
          recipe_name: "Cooked Beef",
          author: "Notch"
        }
      ]);
    });
};
