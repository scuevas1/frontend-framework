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
        <router-link to="/recipes/huevos-con-chorizo" class="featured-link">
          <div class="recipe-card">
            <img src="/images/chorizo.jpg" alt="Huevos con Chorizo" />
            <h3>Huevos con Chorizo</h3>
          </div>
        </router-link>

        <router-link to="/recipes/arepas-con-queso" class="featured-link">
          <div class="recipe-card">
            <img src="/images/arepas.jpg" alt="Arepas con Queso" />
            <h3>Arepas con Queso</h3>
          </div>
        </router-link>

        <router-link to="/recipes/banana-bread" class="featured-link">
          <div class="recipe-card">
            <img src="/images/banana-bread.jpg" alt="Banana Bread" />
            <h3>Banana Bread</h3>
          </div>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script>
import { getRandom, recipes, tips } from '../scripts/home.js'

export default {
  name: "Home",

  data() {
    return {
      randomRecipe: null,
      cookingTip: null,
      recipes,
      tips
    }
  },

  methods: {
    showRandomRecipe() {
      this.randomRecipe = getRandom(this.recipes)
    },
    showCookingTip() {
      this.cookingTip = getRandom(this.tips)
    }
  }
}
</script>