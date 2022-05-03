function verifyIngredients(recipeObject) {
  const maxIngredients = 15;
  const ingredientsArray = [];
  for (let index = 1; index <= maxIngredients; index += 1) {
    const auxIngred = `strIngredient${index}`;
    const auxMeasure = `strMeasure${index}`;
    if (recipeObject[auxIngred]) {
      ingredientsArray.push({
        ingredient: recipeObject[auxIngred],
        measure: recipeObject[auxMeasure],
      });
    }
  }
  return ingredientsArray;
}

export default verifyIngredients;
