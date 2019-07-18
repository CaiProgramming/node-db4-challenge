exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("measurements")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("measurements").insert([
        { name: "lb" },
        { name: "cup" },
        { name: "liter" },
        { name: "tablespoon" },
        { name: "teaspoon" },
        { name: "pinch" }
      ]);
    });
};
