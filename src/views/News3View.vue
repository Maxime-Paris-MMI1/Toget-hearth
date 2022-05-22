<template>
    <header>
        <HeaderFonce/>
    </header>
    <main>
        <div>
            <VignetteArticle class="-mt-8" 
            image="/images/newseurope.webp"
            titre1="L’Europe"
            titre2="et la biodiversité"
            intro="L’Europe s’engage à renforcer la protection de la biodiversité."/>
        </div>
        <div class="mt-[370px]">
            <p class="mt-6 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Le 24 et 25 février à Strasbourg la présidence française du Conseil de l'union européenne ont adopté la déclaration de Strasbourg qui met en avant l’extension du réseau Natura 200 dans le but d’atteindre 30% d’aires protégées d’ici 2030. 
            </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Aujourd’hui, nous avons seulement 18 % de terres protégées. De plus, lors de cette déclaration la Commission européenne évoque des plans de restauration des écosystèmes terrestres et marins notamment en simplifiant l’accès aux financement en consacrant dès 2024, 7,5% des dépenses annuelles de l’union aux objectifs de protection de la biodiversité. 
            </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                L’action la plus concrète de cette déclaration concerne la région du Grand Est avec l’élaboration du projet “Life Biodiv’Est” qui est de consacrer 26, 1 millions d’euros sur dix ans à la création de nouvelles réserves naturelles régionales notamment avec la plantation de 1000 km de haies ainsi que plusieurs plans d’actions pour protéger des espèces locales menacées. 
            </p>
            <p class="ml-44 font-poppins text-xs font-normal text-vert-fonce-typographie">(Source : Actu Environnement)</p>
        </div>
    </main>
    <footer>
      <FooterPage/>
    </footer>
</template>

<script>
import HeaderFonce from "../components/HeaderFonce.vue"
import VignetteArticle from "../components/VignetteArticle.vue"
import FooterPage from "../components/FooterPage.vue"

export default {
   components: { HeaderFonce, FooterPage, VignetteArticle } 
}
</script>
