<template>
  <header>
   <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/conseil1">Déchets Plastiques</RouterLink>
        <RouterLink to="/conseileco">Conseils Écologiques</RouterLink>
        <RouterLink to="/conseil2">Alimentation durable</RouterLink>
        <RouterLink to="/conseil3">Transports Écologiques</RouterLink>
        <RouterLink to="/conseil4">Transports Écologiques</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>