<template>
  <header>
   <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/conseileco">Conseils Écologiques</RouterLink>
        <RouterLink to="/conseilecoco">Connecté</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>