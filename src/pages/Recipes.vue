<template>
  <div class="recipes-magazine">

    <section class="recipes-header">
      <h1 class="mag-title">Explore My Cookbook</h1>
      <p class="mag-subtitle">A yummy lineup of my easy and favorite homemade recipes.</p>
    </section>

    <section class="masonry-grid">

      <router-link
        v-for="recipe in recipes"
        :key="recipe.slug"
        :to="recipe.path"
        class="masonry-item"
      >
        <div class="masonry-card">
          <img :src="recipe.image" :alt="recipe.title" />
          <div class="masonry-overlay">
            <h3>{{ recipe.title }}</h3>
            <p>{{ recipe.meta }}</p>
          </div>
        </div>
      </router-link>

    </section>

  </div>
</template>

<script>
import recipes from "../data/recipes.json"
  export default {
    name: "Recipes",
    data() {
      return {
        recipes
      }
    }
  }
</script>
