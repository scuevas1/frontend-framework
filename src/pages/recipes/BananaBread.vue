<template>
  <div class="recipe-detail">

    <div class="recipe-content">

      <div class="recipe-image">
        <img src="/images/banana-bread.jpg" alt="Banana Bread" />
      </div>

      <div class="recipe-info">
        <h1 class="recipe-title">Banana Bread</h1>

        <p class="recipe-times">
          Prep Time: <strong>15 minutes</strong><br />
          Cook Time: <strong>60 minutes</strong><br />
          Total Time: <strong>75 minutes</strong>
        </p>

        <h2 class="section-heading">Ingredients</h2>
        <ul class="ingredients-list">
          <li>2-3 ripe bananas</li>
          <li>1/3 cup butter</li>
          <li>1/2 tsp baking soda</li>
          <li>3/4 sup sugar</li>
          <li>1 egg</li>
          <li>1 tsp vanilla extract</li>
          <li>1 1/2 cups all-purpose flour</li>
          <li>1/2 cup chopped walnuts (OPTIONAL)</li>
        </ul>

        <h2 class="section-heading">Instructions</h2>
        <ol class="instructions-list">
          <li>Preheat the oven to 350°F and butter a 8x4 inch loaf pan</li>
          <li>In a mixing bowl, mash the ripe bananas with a fork until completely smooth</li>
          <li>Then stir the melted butter into the mashed bananas</li>
          <li>Mix in the egg, vanilla extract, sugar, baking soda, salt and then fold in the flour and walnuts</li>
          <li>Once mixed, pour the batter into the buttered loaf pan and bake for about 60 minutes or until fully baked</li>
          <li>Once fully baked, remove from oven, let it cool and serve</li>
        </ol>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "BananaBread"
}
</script>