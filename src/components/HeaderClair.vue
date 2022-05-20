<template>
  <header class="bg-blanc-vert-title">
    <div class="flex justify-between pb-6 shadow-xl">
      <div class="pt-8 pl-6">
        <IconConnexion/>
      </div>
      <div class="pt-5">
        <a href="/"><LogoSite/></a>
      </div>
      <div class="pt-12 pr-7">
        <MenuHamburger/>
      </div>
    </div>
  </header>
</template>

<script>
import IconConnexion from "../components/icons/IconConnexion.vue" 
import MenuHamburger from "../components/icons/MenuHamburger.vue" 
import LogoSite from "../components/icons/LogoSite.vue" 
export default {
  name: "Header",
  components: {IconConnexion, MenuHamburger, LogoSite}
};
</script>