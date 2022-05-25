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

      <h2 class="font-poppins pl-20 pr-10 font-medium text-4xl mb-5 text-white drop-shadow-lg">
        Des conseils
        écologiques
      </h2>

    </div>

    <div class="flex justify-center">

      <p class=" font-poppins pl-20 pr-10 font-extralight text-xl mb-20 text-white drop-shadow-lg">
        Ces conseils vous permettront d’appliquer au quotidien des bons gestes et ainsi agir pour notre planète.

      </p>

      </div>



<div class="flex flex-col items-center mb-16">
  <div class="flex flex-col items-center">
    <div class=" flex overflow-x-scroll  gap-5 ">

     <a href="./conseil2"> <img class="w-full  object-cover" src="../../public/images/accueil_conseil1.webp" id="slide1"></a>
      <a href="./conseil3"> <img class="w-full  object-cover" src="../../public/images/accueil_conseil2.webp" id="slide2"> </a>
      <a href="./connexion"> <img class="w-full  object-cover" src="../../public/images/accueil_conseil3.webp" id="slide3"></a>
    </div>
  </div>

</div>

      <div class="flex justify-center mb-16">
      <drop-down/>
      </div>

 <div class="flex justify-center">

      <h2 class="font-poppins  pl-20 pr-10 font-medium text-4xl mb-5 text-white drop-shadow-lg">
     Les actualités dans une Newsletter
      </h2>

    </div>

    <div class="flex justify-center">

      <p class=" font-poppins  pl-20 pr-10 font-extralight text-xl mb-20 text-white drop-shadow-lg">
        Rester au courant des dernieres informations sur ce qui se passe en therme d’écologie dans le monde.

      </p>

      </div>

    <div class="flex flex-col items-center mb-16">
  <div class="flex flex-col items-center">
    <div class=" flex overflow-x-scroll  gap-5  ">

     <a href="./Conseil2View.vue"> <img class=" object-cover w-screen" src="../../public/images/newsletter_accueil1.webp" id="slide1"> </a>
      <a href="./Conseil3View.vue"> <img class="  object-cover w-screen" src="../../public/images/newsletter_accueil2.webp" id="slide2"> </a>
      <a href="./Conseil5View.vue"> <img class="  object-cover w-screen" src="../../public/images/newsletter_accueil3.webp" id="slide3"> </a>
    </div>
  </div>
    </div>

   
        <div class="mb-16">
        <BoutonAction
        :fluo="true"
        titrebouton="Découvrir"
        lien= "/Newsletter" />
        </div>

              <div class="flex justify-center mb-16">
      <drop-down/>
      </div>
    
 <div class="flex justify-center">

      <h2 class="font-poppins  pl-20 pr-10 font-medium text-4xl mb-5 text-white drop-shadow-lg">
     Des défis 
exclusifs !
      </h2>

    </div>

    <div class="flex justify-center">

      <p class=" font-poppins  pl-20 pr-10 font-extralight text-xl mb-20 text-white drop-shadow-lg">
        Réalisez une multitude de défis au quotidien afin d’obtenir des points

      </p>

      </div>


      <div class="flex justify-center mb-16">

      <img src="../../public/images/imagedefi.webp" alt="image de defi en exemple">

      </div>



      <div class="flex justify-center mb-16">
      <drop-down/>
      </div>

 <div class="flex justify-center">

      <h2 class="font-poppins  pl-20 pr-10 font-medium text-4xl mb-5 text-white drop-shadow-lg">
     Des évènements
écologiques
      </h2>

    </div>

    <div class="flex justify-center">

      <p class=" font-poppins  pl-20 pr-10 font-extralight text-xl mb-20 text-white drop-shadow-lg">
        Trouvez ou organisez des rassemblements proche de chez vous pour participer à des collectes de déchets et bien d’autres !

      </p>

      </div>

      <div class="mb-16">

        <div class="flex justify-center">
        <div class=" mt-60 absolute">
        <BoutonAction
        :fluo="true"
        titrebouton="Trouver un évènement" />
        </div>
        </div>

<img src="../../public/images/image_accueil_evenement.jpg" class="w-full h-[477px] object-cover " />


      </div>

<p class=" font-poppins pl-10 pr-10 text-lg mb-9 text-white  font-semibold"> Vous souhaitez aider la planète par le biais d’un dons ?  </p>

    <p class=" font-poppins pl-10 pr-10 text-lg mb-20 text-white  font-extralight">
    

     Vous pouvez faire un don qui sera retransmis à une associations dans le but d’aider notre planète et 10% seront retransmis à notre site afin de le développer d’avntage pour avancer dans ce mouvement écologique.
    </p>

    <div class="flex justify-center mb-14">

      <img src="../../public/images/accueil_don.webp" alt="image de defi en exemple">

      </div>
        <div>
        <BoutonAction
        :fluo="true"
        titrebouton="Faire un don"
        lien= "/dons"
        />
        </div>
        
<div class="bg-gradient-to-b from-vert-moyen-deco to-vert-pastel-deco p-10"></div>
   

    </section>
    




  </main>
  


  <footer class=" -mt-14" >
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
import BoutonAction from "../components/BoutonAction.vue"
import FondBouton from "../components/icons/FondBouton.vue"
export default {
  name: "Accueil",
  components: {IconConnexion, MenuHamburger, LogoSite, LogoGrand, DropDown, FooterPage, BoutonAction,FondBouton, },
};
</script>