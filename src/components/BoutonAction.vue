<template>
<RouterLink :to="lien">
<div class="flex flex-row justify-center">
  <FondBouton class="drop-shadow-xl"
  :class="{ 'fill-vert-kaki-elements-importants drop-shadow-xl ': kaki,
            'fill-vert-fluo-bouton drop-shadow-xl': fluo,
            'fill-vert-moyen-deco drop-shadow-xl': vertmoyen}"/>
  <p class="flex-grow-0 flex-shrink-0 text-lg font-poppins font-medium text-left text-blanc-background drop-shadow-sm absolute mt-5">{{titrebouton}}</p>
</div>
</RouterLink>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import FondBouton from "./icons/FondBouton.vue";
export default {

  name: "Fond",
  components: {FondBouton, },

  props: {
    titrebouton: String,
    lien:{
      type: String,
      default:"/"
    },
    kaki:{
      type: Boolean,
      default: false,
    },
      fluo:{
      type: Boolean,
      default: false,
    },
       vertmoyen:{
      type: Boolean,
      default: false,
    },
    
  }
}
</script>

// style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0,0,0,0.25);"