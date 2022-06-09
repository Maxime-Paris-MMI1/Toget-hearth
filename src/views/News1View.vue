<template>
    <header>
        <HeaderFonce/>
    </header>
    <main>
        <div>
            <VignetteArticle class="-mt-8" 
            image="/images/news_australie.webp"
            titre1="L'Australie"
            titre2="sous les inondations"
            intro="Il est de plus en plus difficile de vivre en Australie."/>
        </div>
        <div class="mt-[370px]">
            <p class="mt-6 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
            Quelques semaines après avoir été touchée par de nombreuses inondations, ce mercredi 30 mars l’Est de l’Australie est à nouveau sous ce phénomène. D’après le premier ministre australien Scott Morrison, il devient difficile de vivre en Australie à cause des nombreuses catastrophes naturelles . 
            </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                En effet, le pays est touché par des épisodes de pluies torrentielles qui entraînent l’évacuation de milliers de personnes. Depuis février, au moins 22 personnes sont mortes lors d’inondations causées par des records de précipitations.          </p>
            <p class="ml-52 font-poppins text-xs font-normal text-vert-fonce-typographie">(Source :  FranceInfo)</p>
        </div>
    </main>
    <footer>
      <FooterPage/>
    </footer>
</template>

<script>
import HeaderFonce from "../components/HeadercoFonce.vue"
import VignetteArticle from "../components/VignetteArticle.vue"
import FooterPage from "../components/FootercoPage.vue"

export default {
   components: { HeaderFonce, FooterPage, VignetteArticle } 
}
</script>
