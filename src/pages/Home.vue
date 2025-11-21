<template>
  <div class="home-container">

    <section class="hero">
      <h1 class="hero-title">Welcome to Suey’s Cookbook</h1>
      <p class="hero-subtitle">A cute collection of homemade recipes made with love.</p>

      <button class="random-btn" @click="showRandomRecipe"> Show Random Recipe </button>

      <p v-if="randomRecipe" class="random-result">You should try: <strong>{{ randomRecipe }}</strong></p>
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
      recipes: [
        "Huevos con Chorizo",
        "Arepas con Queso",
        "Banana Bread",
        "Lava Cake"
      ]
    };
  },

  methods: {
    showRandomRecipe() {
      const index = Math.floor(Math.random() * this.recipes.length);
      this.randomRecipe = this.recipes[index];
    }
  }
};
</script>