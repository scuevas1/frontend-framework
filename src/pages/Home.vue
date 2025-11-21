<template>
  <div class="home-container">

    <section class="hero-section">
        <h1 class="hero-title">Suey’s Cookbook</h1>
        <p class="hero-subtitle">A curated collection of homemade recipes made with love</p>

        <div class="hero-buttons">
            <button class="hero-btn" @click="showRandomRecipe">Discover a Recipe</button>

            <button class="hero-btn outline" @click="showCookingTip">Cooking Tip</button>
        </div>

        <p v-if="randomRecipe" class="hero-result">
            Try cooking: <strong>{{ randomRecipe }}</strong>
        </p>

        <p v-if="cookingTip" class="hero-tip">
            Tip: {{ cookingTip }}
        </p>

    </section>


    <section class="featured">
      <h2 class="section-title">Featured Recipes</h2>

      <div class="card-container">
        <div class="recipe-card">
          <img src="/images/chorizo.jpg" alt="Huevos con Chorizo" />
          <h3>Huevos con Chorizo</h3>
        </div>

        <div class="recipe-card">
          <img src="/images/arepas.jpg" alt="Arepas con Queso" />
          <h3>Arepas con Queso</h3>
        </div>

        <div class="recipe-card">
          <img src="/images/banana-bread.jpg" alt="Banana Bread" />
          <h3>Banana Bread</h3>
        </div>

        <div class="recipe-card">
          <img src="/images/lava-cake.jpg" alt="Lava Cake" />
          <h3>Lava Cake</h3>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
  return {
    randomRecipe: null,
    cookingTip: null,

    recipes: [
      "Huevos con Chorizo",
      "Arepas con Queso",
      "Banana Bread",
      "Lava Cake"
    ],

    tips: [
      "Season as you go, not just at the end.",
      "Let meat rest before slicing for juicier results.",
      "Taste your food while cooking and adjust as needed.",
      "Use room-temperature eggs for better baking results."
    ]
  }
},

methods: {
  showRandomRecipe() {
    const index = Math.floor(Math.random() * this.recipes.length);
    this.randomRecipe = this.recipes[index];
  },

  showCookingTip() {
    const index = Math.floor(Math.random() * this.tips.length);
    this.cookingTip = this.tips[index];
  }
}

}
</script>