<template>
  <header class="bg-blanc-vert-title">
    <div class="flex justify-between pb-6 shadow-xl">
      <div class="pt-8 pl-6">
        <RouterLink to="/connexion">
          <IconConnexion/>
        </RouterLink>
      </div>
      <div class="pt-5">
        <a href="/"><LogoSite/></a>
      </div>



      <div class="pt-12 pr-7">
        <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
          <MenuHamburger/>
          <span class="sr-only">Menu</span>
        </button>
      </div>
      <div id="menu" class="z-50 fixed inset-0 translate-x-full bg-red-200 motion-safe:duration-1000 motion-safe:transition-transform" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <ul>
          <li><router-link to="/">Un</router-link></li>
          <li><router-link to="/">Deux</router-link></li>
          <li><router-link to="/">Trois</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import IconConnexion from "../components/icons/IconConnexion.vue" 
import MenuHamburger from "../components/icons/MenuHamburger.vue" 
import LogoSite from "../components/icons/LogoSite.vue" 
export default {
  name: "Header",
  components: {IconConnexion, MenuHamburger, LogoSite},
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  }
};
</script>