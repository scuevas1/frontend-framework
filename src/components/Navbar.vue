<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="nav-logo">Suey's Cookbook</router-link>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/recipes">Recipes</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>
