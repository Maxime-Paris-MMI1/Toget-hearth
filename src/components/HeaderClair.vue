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
          <div>
            <MenuHamburger :class="{'hidden' : menuOuvert}" />
          </div>
          <span class="sr-only">Menu</span>
        </button>
      </div>
      <div id="menu" class="z-50 fixed inset-0 translate-x-full bg-white motion-safe:duration-1000 motion-safe:transition-transform" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-between">
          <DecoHG/>
          <button class="relative z-50 mr-8 -mt-20" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <CroixMenu :class="{'motion-safe:animate-bounce' : menuOuvert}"/>
          </button>
        </div>

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
import CroixMenu from "../components/icons/CroixMenu.vue" 
import DecoHG from "../components/icons/DecoHG.vue" 
export default {
  name: "Header",
  components: {IconConnexion, MenuHamburger, LogoSite, CroixMenu, DecoHG},
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