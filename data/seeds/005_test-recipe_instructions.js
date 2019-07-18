exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        { step: "1", text: "on", recipe_id: 1 },
        { step: "2", text: "place over medium heat for 20 mins", recipe_id: 1 },
        { step: "1", text: "on", recipe_id: 2 },
        { step: "2", text: "place over medium heat for 20 mins", recipe_id: 2 }
      ]);
    });
};
