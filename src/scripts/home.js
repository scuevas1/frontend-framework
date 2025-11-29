export const recipes = [
  "Huevos con Chorizo",
  "Arepas con Queso",
  "Banana Bread",
  "Carrot Cake",
  "Cajun Pasta",
  "Lava Cake"
];

export const tips = [
  "Season as you go, not just at the end.",
  "Let meat rest before slicing for juicier results.",
  "Taste your food while cooking and adjust as needed.",
  "Use room-temperature eggs for better baking results."
];

export function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
