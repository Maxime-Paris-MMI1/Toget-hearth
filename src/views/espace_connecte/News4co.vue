<template>
    <header>
        <HeadercoFonce/>
    </header>
    <main>
        <div>
            <VignetteArticle class="-mt-8" 
            image="/images/newsenvironnement.webp"
            titre1="La journée mondiale"
            titre2="de l'environnement"
            intro="Lajournée de l'environnement voir la semaine de l'environnement pour certaines marques"/>
        </div>
        <div class="mt-[370px]">
            <p class="mt-6 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                La journée mondiale de l’environnement a eu lieu ce dimanche 5 juin 2022, avec de nombreuses actions dans le monde entier. Même des marques ont mis en avant des actions pour montrer leurs implications dans la sauvegarde de l’environnement.  
            </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                C’est le cas de Etam, une marque de vêtements notamment connue pour sa lingerie. En effet, lors de ce jour, cette marque à célébrer sa “WeeCare Week” qui est une semaine où elle a sensibilisé le public sur ses engagements pour la planète, la transparence et les femmes. Etam a sorti un nouveau concept, que nous pouvons trouver dans ses magasins qui sont des bornes de collecte d’anciens soutiens-gorge qui seront redistribué à des femmes en situations de précarité via des associations partenaires. 
            </p>
            <p class="ml-44 font-poppins text-xs font-normal text-vert-fonce-typographie">(Source : Etam.ch)</p>
        </div>
    </main>
    <footer>
      <FootercoPage/>
    </footer>
</template>

<script>
import HeadercoFonce from "../../components/HeadercoFonce.vue"
import VignetteArticle from "../../components/VignetteArticle.vue"
import FootercoPage from "../../components/FootercoPage.vue"

export default {
   components: { HeadercoFonce, FootercoPage, VignetteArticle } 
}
</script>
