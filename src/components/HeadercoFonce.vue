<template>
    <header class="bg-vert-pastel-deco">
    <div class="flex justify-between pb-6 pt-1">
      <div class="pt-8 pl-5">
        <a href="javascript:history.back()"><FlecheGauche/></a>
      </div>
      <div class="pt-3">
        <a href="">
          <RouterLink to="/accueilco">
            <LogoSite/>
          </RouterLink>
        </a>
      </div>
      <div class="pt-7 pr-5">
        <RouterLink to="/profil">
          <IconConnexion/>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import FlecheGauche from "../components/icons/FlecheGauche.vue"
import LogoSite from "../components/icons/LogoSite.vue"
import IconConnexion from "../components/icons/IconConnexion.vue"

export default {
   components: {FlecheGauche, LogoSite, IconConnexion } 
}
</script>