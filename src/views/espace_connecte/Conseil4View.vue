<template>
  <header>
    <HeadercoFonce/>
  </header>
    <div>
        <VignetteArticle class="-z-10"
        image="/images/photo_gaspillage.webp"
        titre2="Éviter le gaspillage"
        intro="10 millions de tonnes de nourriture sont gaspillées chaque année en France !"/>  
    </div>
    <div>
        <p class="z-2 mt-[370px] ml-5 mr-6 font-poppins text-xs ">
            Pour éviter le gaspillage nous vous conseillons d’acheter  
            <span class="font-medium text-vert-kaki-elements-importants">seulement</span> 
              ce dont vous avez besoin,  
            <span class="font-medium text-vert-kaki-elements-importants">organisez</span>
             vos repas et réalisez une liste de courses que vous devez respecter. Il faut éviter au maximum 
            <span class="font-medium text-vert-kaki-elements-importants">les achats compulsifs !</span></p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/public/images/gaspillage1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Au niveau des repas, commencez doucement avec des proportions   
            <span class="font-medium text-vert-kaki-elements-importants">plus petites</span>
             et ensuite si vous avez encore faim, resservez-vous. Et si vous n’avez pas tout mangé ce que vous avez préparé, ce n’est pas grave,  
            <span class="font-medium text-vert-kaki-elements-importants">conservez les</span>
             et vous pourrez vous en resservir plus tard ! </p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/public/images/gaspillage2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Du côté des déchets, au lieu de réaliser des déchets alimentaires,   
            <span class="font-medium text-vert-kaki-elements-importants">compostez-les</span>
              cela permet de donner des  
            <span class="font-medium text-vert-kaki-elements-importants">nutriments au sol</span>
             et donc de 
            <span class="font-medium text-vert-kaki-elements-importants">de réduire votre empreinte carbone.</span></p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/gaspillage3.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Autre que la nourriture, nous devons éviter le gaspillage de 
            <span class="font-medium text-vert-kaki-elements-importants">l'eau</span>
              , il faut
            <span class="font-medium text-vert-kaki-elements-importants">diminuer</span>
              votre consommation d’eau notamment en fermant le robinet lorsque vous vous brossez les dents.</p>
    </div>
    <footer>
      <FootercoPage/>
    </footer>
</template>

<script>
import VignetteArticle from "../../components/VignetteArticle.vue"
import FlecheGauche from "../../components/icons/FlecheGauche.vue"
import LogoSite from "../../components/icons/LogoSite.vue"
import IconConnexion from "../../components/icons/IconConnexion.vue"
import FootercoPage from "../../components/FootercoPage.vue"
import HeadercoFonce from "../../components/HeadercoFonce.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion, FootercoPage, HeadercoFonce } 
}
</script>
