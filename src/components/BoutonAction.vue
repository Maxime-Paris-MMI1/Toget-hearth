<template>
<RouterLink :to="lien">
<div
  class="flex justify-center items-center relative gap-2 px-9 py-4 rounded-22xl bg-vert-fluo-bouton mx-[88px]"
  style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0,0,0,0.25);"
>
  <p class="flex-grow-0 flex-shrink-0 text-base font-poppins font-medium text-left text-blanc-background drop-shadow-sm">{{titrebouton}}</p>
</div>
</RouterLink>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  props: {
    titrebouton: String,
    lien:{
      type: String,
      default:"/"
    },
  }
}
</script>
