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
    <h2 class="text-center font-poppins p-10 font-medium text-2xl mb-20">Changer votre quotidien pour aider 
        notre planete</h2>
    <div class="flex justify-center">
      <img class="w-100 " src="../../public/images/plante_accueil.webp">
    </div>


    

    <section class="bg-vert-moyen-deco">
      <img class=" object-cover w-screen" src="public\images\rectangledegrade.webp" alt="degradé">

      <h3 class="text-center font-poppins pl-10 pr-10 font-medium text-2xl mb-20 text-white drop-shadow-lg">
        Avec Toget'Hearth <br> Venez découvrir
      </h3>

      <div class="flex justify-center mb-16">
      <drop-down/>
      </div>
    <div class="flex justify-center">

      <h2 class="font-poppins pl-10 pr-10 font-medium text-4xl mb-5 text-white drop-shadow-lg">
        Des conseils
        écologiques
      </h2>

    </div>

    <div class="flex justify-center">

      <p class=" font-poppins pl-10 pr-10 font-extralight text-xl mb-20 text-white drop-shadow-lg">
        Ces conseils vous permettront d’appliquer au quotidien des bons gestes et ainsi agir pour notre planète.

      </p>

      </div>






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
  components: {IconConnexion, MenuHamburger, LogoSite, LogoGrand, DropDown, FooterPage },
};
</script>