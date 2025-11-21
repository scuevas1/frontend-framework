<template>
  <div class="recipes-magazine">

    <section class="recipes-header">
      <h1 class="mag-title">Explore the Cookbook</h1>
      <p class="mag-subtitle">A curated visual spread of homemade favorites.</p>
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
export default {
  name: "Recipes",

  data() {
    return {
      recipes: [
        {
          title: "Huevos con Chorizo",
          slug: "huevos-con-chorizo",
          path: "/recipes/huevos-con-chorizo",
          image: "/images/chorizo.jpg",
          meta: "10 min · Breakfast"
        },
        {
          title: "Arepas con Queso",
          slug: "arepas-con-queso",
          path: "/recipes/arepas-con-queso",
          image: "/images/arepas.jpg",
          meta: "22 min · Snack"
        },
        {
          title: "Banana Bread",
          slug: "banana-bread",
          path: "/recipes/banana-bread",
          image: "/images/banana-bread.jpg",
          meta: "70 min · Dessert"
        },
        {
          title: "Cajun Pasta",
          slug: "cajun-pasta",
          path: "/recipes/cajun-pasta",
          image: "/images/cajun-pasta.jpg",
          meta: "30 min · Dessert"
        },
        {
          title: "Carrot Cake",
          slug: "carrot-cake",
          path: "/recipes/carrot-cake",
          image: "/images/carrot-cake.jpg",
          meta: "65 min · Dessert"
        },
        {
          title: "Lava Cake",
          slug: "lava-cake",
          path: "/recipes/lava-cake",
          image: "/images/lava-cake.jpg",
          meta: "24 min · Dessert"
        }
      ]
    }
  }
}
</script>
