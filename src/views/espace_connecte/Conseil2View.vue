<template>
    <header>
      <HeaderFonce/>
    </header>
    <div>
        <VignetteArticle 
        image="/images/photo_alimentation.webp"
        titre1="Adopter une"
        titre2="alimentation durable"
        intro="En France, 20% des émissions de gaz à effet de serre sont dues à l’agriculture et principalement à cause de notre alimentation."/>  
    </div>
    <div>
        <p class="mt-[400px] ml-5 mr-6 font-poppins text-xs ">Pour limiter ces émissions, nous pouvons agir en changeant notre régime alimentaire en adoptant <span class="font-medium text-vert-kaki-elements-importants">une alimentation durable.</span> Pour adopter une alimentation durable, il faut privilégier <span class="font-medium text-vert-kaki-elements-importants">les fruits et légumes de saison,</span> cela évite la recréation de certains aliments avec un climat adéquat notamment en utilisant des serres chauffées. Également, il faut privilégier une <span class="font-medium text-vert-kaki-elements-importants">alimentation plus végétale</span> avec des fruits et des légumes.</p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/alimentation1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">Nous devons <span class="font-medium text-vert-kaki-elements-importants">limiter</span> notre consommation de viande, d’après certaines études l’industrie de la viande serai le premier secteur de pollution dans le monde devant le secteur des transports.</p>
         <div class="flex justify-center">
        <img class="mt-8 " src="/images/alimentation2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">Il faut donc privilégier les <span class="font-medium text-vert-kaki-elements-importants">produits locaux</span> et de saison et remplacer notre consommation de viande par la consommation de légumes ou <span class="font-medium text-vert-kaki-elements-importants">de poissons</span> de la pêche durable.</p>
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
import HeaderFonce from "../../components/HeaderFonce.vue"
import FooterPage from "../../components/FooterPage.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion, HeaderFonce, FooterPage } 
}
</script>
