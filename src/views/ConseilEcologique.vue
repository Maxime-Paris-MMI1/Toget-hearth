<template>
  <header>
    <HeaderClair/>
  </header>
  <main>

  </main>
  <footer>
    <FooterPage/>
  </footer>
</template>

<script>
import HeaderClair from "../components/HeaderClair.vue" 
import FooterPage from "../components/FooterPage.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage }
};
</script>