<template>
  <div class="recipe-detail">
    <router-link to="/recipes" class="back-button">
      ←  Back to Recipes
    </router-link>
    <div class="recipe-content">

      <div class="recipe-image">
        <img src="/images/cajun-pasta.jpg" alt="Cajun Pasta" />
      </div>

      <div class="recipe-info">
        <h1 class="recipe-title">Cajun Pasta</h1>

        <p class="recipe-times">
          Prep Time: <strong>10 minutes</strong><br />
          Cook Time: <strong>25 minutes</strong><br />
          Total Time: <strong>35 minutes</strong>
        </p>

        <h2 class="section-heading">Ingredients</h2>
        <ul class="ingredients-list">
          <li>8 oz penne pasta</li>
          <li>2 tbsp of cajun seasoning</li>
          <li>1/2 tsp salt</li>
          <li>1 lb raw jumpo shrimp</li>
          <li>3 tbsp unsalted butter</li>
          <li>7 ounces andouille sausage</li>
          <li>2 garlic cloves</li>
          <li>1 small yellow onion</li>
          <li>1 1/4 cup heavy cream</li>
          <li>3 cups water</li>
          <li>3/1 tsp paprika</li>
          <li>1 tbsp oregano</li>
          <li>1/4 tsp onion powder</li>
          <li>1 can roasted corn</li>
        </ul>

        <h2 class="section-heading">Instructions</h2>
        <ol class="instructions-list">
          <li>Peel and devein 1 pound raw jumbo shrimp if needed, then pat dry with papertowl</li>
          <li>On a pan melt 2 tbsp of butter and cook the shrimp then transfer to a plate</li>
          <li>Cook penne pasta according to package directions, drain and set aside</li>
          <li>Combine paprika, garlic powder, oregano, onion powder, salt & pepper and cajun and mix well to combine</li>
          <li>In the pan add 1 finely chopped small yellow onion and 2 thinly sliced garlic cloves</li>
          <li>In the pan stir 1 1/4 cups heavy cream and the seasoning mix</li>
          <li>Once the sauce is done add in the pasta, andouille sausage, shrimp and corn</li>
        </ol>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "CajunPasta"
}
</script>
