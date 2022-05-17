<template>
  <header>
    <div class="flex justify-between">
      <div class="pt-8 pl-6">
        <IconConnexion/>
      </div>
      <div class="pt-12 pr-7">
        <MenuHamburger/>
      </div>
    </div>
    <div class="flex justify-center cursor-se-resize">
      <logo-grand/>
    </div>
  </header>

  <main>


    <drop-down/>
  </main>
</template>

<script>
import IconConnexion from "../components/icons/IconConnexion.vue" 
import MenuHamburger from "../components/icons/MenuHamburger.vue" 
import LogoSite from "../components/icons/LogoSite.vue" 
import LogoGrand from "../components/icons/LogoGrand.vue" 
import DropDown from "../components/icons/DropDown.vue" 

export default {
  name: "Header",
  components: {IconConnexion, MenuHamburger, LogoSite, LogoGrand},
  name:"ContenuAccueil",
  components:{DropDown, }
};

</script>