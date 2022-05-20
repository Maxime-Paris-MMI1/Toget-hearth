<template>
  <header>
    <HeaderFonce/>
  </header>
    <div>
        <VignetteArticle 
        image="/images/photo_dechet.webp"
        titre1="Éviter les"
        titre2="déchets plastiques"
        intro="90% de la faune marine est impactée par la pollution du plastique ! "/>  
    </div>
    <div>
        <p class="mt-[370px] ml-5 mr-6 font-poppins text-xs ">Face à cette situation, nous pouvons agir avec des petits gestes au quotidien. Lors de vos courses, optez pour <span class="font-medium text-vert-kaki-elements-importants">des sacs en toile</span> pour éviter l’utilisation de sachet plastique.</p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/dechet1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">Du côté des cosmétiques de nombreux produits sont emballés dans du plastique mais aujourd’hui il existe des alternatives comme des <span class="font-medium text-vert-kaki-elements-importants">savonnettes</span>, la création de <span class="font-medium text-vert-kaki-elements-importants">shampoing solide</span> ou encore <span class="font-medium text-vert-kaki-elements-importants">du dentifrice solide</span>. Nous devons changer notre confort, nos habitudes du quotidien pour pouvoir limiter notre impact sur l’environnement.</p>
         <div class="flex justify-center">
        <img class="mt-8 " src="/images/dechet2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">Nous devons renoncer aux produits jetables, en adoptant <span class="font-medium text-vert-kaki-elements-importants">des produits réutilisables</span> nous sommes conscient qu’il est difficile de renoncer entièrement au plastique mais nous devons opter pour la meilleur version réutilisable comme <span class="font-medium text-vert-kaki-elements-importants">des éco-cup</span> au lieu des gobelets en plastique.</p>
    </div>
    <footer>
      <FooterPage/>
    </footer>
</template>

<script>
import VignetteArticle from "../../components/VignetteArticle.vue"
import FlecheGauche from "../../components/icons/FlecheGauche.vue"
import LogoSite from "../../components/icons/LogoSite.vue"
import IconConnexion from "../../components/icons/IconConnexion.vue"
import FooterPage from "../../components/FooterPage.vue"
import HeaderFonce from "../../components/HeaderFonce.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion, FooterPage, HeaderFonce } 
}
</script>
