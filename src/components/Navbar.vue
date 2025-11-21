<template>
  <nav class="navbar">
    <div class="nav-content">
      <h1 class="nav-logo">Suey’s Cookbook</h1>

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
