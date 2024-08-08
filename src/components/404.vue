<template>
    <div class="not-found">
      <img src="@/assets/404.png" alt="Page not found" />
      <h1>Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <router-link to="/">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 40px;
  }
  
  .not-found img {
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  .not-found h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .not-found p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  .not-found a {
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
  }
  </style>
  