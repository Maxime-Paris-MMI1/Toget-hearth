<template>
  <!-- Le header de cette page est unique c'est pour cela que nous l'avons pas crée dans les composants -->
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
    <h2 class="text-center font-poppins p-10 font-medium text-2xl ">Changer votre quotidien pour aider 
        notre planete</h2>
        <div class="flex justify-center">
    <img class="w-100 -m-10" src="../../public/images/plante_accueil.webp">
   
 <main>
    <h2 class="text-center font-poppins p-10 font-medium text-2xl ">Changer votre quotidien pour aider 
        notre planete</h2>
        <div class="flex justify-center">
    <img class="w-100 -m-10" src="../../public/images/plante_accueil.webp">
   

    
    </div>
     

    <drop-down/>

    <section class="bg-vert-moyen-deco">
      <img class=" object-cover w-screen" src="public\images\rectangledegrade.webp" alt="degradé">

      <p>
        construction
      </p>


    </section>
    
    </div>
     

    <drop-down/>

    <section class="bg-vert-moyen-deco">
      <img class=" object-cover w-screen" src="public\images\rectangledegrade.webp" alt="degradé">

      <p>
        construction
      </p>


    </section>
  </main>

  <footer>
    <FooterPage/>
  </footer>
  
</template>

<script>
import IconConnexion from "../components/icons/IconConnexion.vue" 
import MenuHamburger from "../components/icons/MenuHamburger.vue" 
import LogoSite from "../components/icons/LogoSite.vue" 
import LogoGrand from "../components/icons/LogoGrand.vue" 
import DropDown from "../components/icons/DropDown.vue" 
import FooterPage from "../components/FooterPage.vue" 

export default {
  name: "Accueil",
  components: {IconConnexion, MenuHamburger, LogoSite, LogoGrand,DropDown, FooterPage },


};

</script>