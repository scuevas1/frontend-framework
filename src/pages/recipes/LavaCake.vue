<template>
  <div class="recipe-detail">

    <div class="recipe-content">

      <div class="recipe-image">
        <img src="/images/lava-cake.jpg" alt="Lava Cake" />
      </div>

      <div class="recipe-info">
        <h1 class="recipe-title">Lava Cake</h1>

        <p class="recipe-times">
          Prep Time: <strong>12 minutes</strong><br />
          Cook Time: <strong>12 minutes</strong><br />
          Total Time: <strong>24 minutes</strong>
        </p>

        <h2 class="section-heading">Ingredients</h2>
        <ul class="ingredients-list">
          <li>1/2 cup unsalted butter</li>
          <li>2 eggs</li>
          <li>2 egg yolks</li>
          <li>1/4 cup sugar</li>
          <li>1/8 tsp salt</li>
          <li>2 tbsp all-purpose flour</li>
          <li>6 ounces bittersweet chocolate</li>
          <li>1 tsp vanilla extract</li>
          <li>Ice cream (OPTIONAL)</li>
        </ul>

        <h2 class="section-heading">Instructions</h2>
        <ol class="instructions-list">
          <li>Preheat the oven to 450°F and butter/lightly flour 6 custard cups</li>
          <li>Microwave the butter and bittersweet chocolate in a large bowl on high until the butter is melted</li>
          <li>Whisk the chocolate and butter and stir in the sugar until nicely mixed</li>
          <li>Whisk in the eggs and egg yolks and the vanilla extract</li>
          <li>Stir in the flour and evenly divide the mixture among the custard cups</li>
          <li>Place the custard cups on a tray and bake until the sides are firm and the centers are soft, about 12 minutes.</li>
          <li>Once baked, remove from oven, let it cool for about 1 minute and serve with ice cream.</li>
        </ol>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LavaCake"
}
</script>