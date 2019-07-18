const db = require("../data/dbConfig");

module.exports = {
  find,
  findIngredients,
  findInstructions,
  add,
  update,
  remove
};

async function find() {
  return await db.table("recipes").select();
}
async function findIngredients(id) {
  return await db
    .select(
      "rec.id AS Recipe",
      "ing.name AS Ingredient",
      "rei.quantity AS Quantity",
      "mes.name AS Measurement"
    )
    .table("recipes AS rec")
    .join("recipe_ingredients AS rei", "rec.id", "=", "rei.recipe_id")
    .join("ingredients AS ing", "rei.ingredient_id", "=", "ing.id")
    .join("measurements AS mes", "rei.measurement_id", "=", "mes.id")
    .where("rec.id", id)
    .orderBy("rei.ingredient_id", "desc");
}
async function findInstructions(id) {
  let instructions = [];
  let data = await findIngredients(id);
  let steps = await db
    .select()
    .table("recipe_instructions")
    .where("recipe_id", id);
  console.log(steps.length);
  for (let i = 0; i < steps.length; i++) {
    let cIngredient = "";
    let cMeasurement = "";
    let sIngredient = "";
    let sMeasurement = "";
    let first = "";
    let end = ".";
    if (i % 2 === 0 && data[i + 1]) {
      cIngredient = data[i + 1].Ingredient;
      cMeasurement = data[i + 1].Measurement;
      sIngredient = data[i].Ingredient;
      sMeasurement = data[i].Measurement;
      first =
        "put " + sMeasurement + " of " + sIngredient + " " + steps[i].text;
    } else {
      cIngredient = data[i].Ingredient;
      cMeasurement = data[i].Measurement;
      end = steps[i].text;
    }
    instructions.push(
      `step: ${steps[i].step} ${first} ${cMeasurement} ${cIngredient} ${end}`
    );
  }
  return instructions;
}
async function add() {
  return await db.table("recipes").select();
}
async function update() {
  return await db.table("recipes").select();
}
async function remove() {
  return await db.table("recipes").select();
}
