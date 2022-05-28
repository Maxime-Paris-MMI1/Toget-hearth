<template>
  <header class="bg-blanc-vert-title">
    <div class="flex justify-between pb-6 shadow-xl">
      <div class="pt-8 pl-6">
        <RouterLink to="/profil">
          <IconConnexion/>
        </RouterLink>
      </div>
      <div class="pt-5">
        <a href="../views/espace_connecte/AccueilcoView.vue"><LogoSite/></a>
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
            <CroixMenu :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}"/>
          </button>
        </div>

        <nav>
          <ul class="flex flex-col text-center gap-9 font-poppins font-medium text-xl">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Accueil</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../conseileco">Conseils Écologiques</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../newsletter">Ramassage des déchets</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../NousContacter">Défis</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.4s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../Conseilramassage">Calendrier</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.5s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../NousContacter">Newsletter</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.6s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="../connexion">Mon compte</RouterLink>
          </ul>
          <div class="flex flex-row justify-between ">
            <RouterLink to="./dons_co"><PieceDon class="mt-[127px]"/></RouterLink>
            <DecoHG class="rotate-180 h-56 -mt-[10px] -mr-[1px]"/>
          </div>
          
          
          
        </nav>
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
import PieceDon from "../components/icons/PieceDon.vue" 
export default {
  name: "Header",
  components: {IconConnexion, MenuHamburger, LogoSite, CroixMenu, DecoHG, PieceDon},
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