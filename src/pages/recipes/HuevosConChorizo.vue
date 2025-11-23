<template>
  <div class="recipe-detail">

    <router-link to="/recipes" class="back-button">
      ←  Back to Recipes
    </router-link>
    <div class="recipe-content">

      <div class="recipe-image">
        <img src="/images/chorizo.jpg" alt="Huevos con Chorizo" />
      </div>

      <div class="recipe-info">
        <h1 class="recipe-title">Huevos con Chorizo</h1>

        <p class="recipe-times">
          Prep Time: <strong>2 minutes</strong><br />
          Cook Time: <strong>8 minutes</strong><br />
          Total Time: <strong>10 minutes</strong>
        </p>

        <h2 class="section-heading">Ingredients</h2>
        <ul class="ingredients-list">
          <li>4 eggs</li>
          <li>7 oz of chorizo</li>
          <li>3 tbsp milk</li>
          <li>Sour cream</li>
          <li>Oaxaca cheese</li>
          <li>Queso fresco</li>
          <li>Corn or Flour tortillas</li>
        </ul>

        <h2 class="section-heading">Instructions</h2>
        <ol class="instructions-list">
          <li>Cook the chorizo in a pan over medium heat.</li>
          <li>Beat the eggs and milk together in a bowl.</li>
          <li>Add the egg mixture to the chorizo and lower heat.</li>
          <li>Warm tortillas for 30 seconds to soften.</li>
          <li>Assemble tacos with eggs, chorizo, and toppings.</li>
        </ol>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HuevosConChorizo"
}
</script>
