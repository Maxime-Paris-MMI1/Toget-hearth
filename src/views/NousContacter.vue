<template>

    <header class="mb-16">
    <HeaderClair/>
  </header>


      <p class=" font-poppins  pl-10 pr-10  text-xl mb-20  drop-shadow-lg">
        Si vous voulez nous contacter pour nous faire parvenir toute questions éventuelles ou bien des conseils pour améliorer notre site, vous êtes au bon endroit !
       <br> Vous avez juste à remplir ce court formulaire de contact.

      </p>



      

      <footer>
    <FooterPage/>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue"  

import FooterPage from "../components/FooterPage.vue" 

export default {
  components: {HeaderClair, FooterPage,}
};
</script>