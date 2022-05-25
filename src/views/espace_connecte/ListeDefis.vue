<template>
<div class="bg-vert-pastel-deco">
  <header>
    <HeaderClair/>
  </header>


  <footer>
    <FooterPage/>
  </footer>
</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../../components/HeaderClair.vue" 

import FooterPage from "../../components/FooterPage.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage }
};
</script>