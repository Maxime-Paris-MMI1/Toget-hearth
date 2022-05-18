<template>
  <header>
   <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/conseil1">Déchets Plastiques</RouterLink>
        <RouterLink to="/conseileco">Conseils Écologiques</RouterLink>
        <RouterLink to="/conseil2">Déchets Plastiques</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>