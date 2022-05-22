<template>
    <header>
        <HeaderFonce/>
    </header>
    <main>
        <div>
            <VignetteArticle class="-mt-8" 
            image="/images/newsparis.webp"
            titre1="Pic de "
            titre2="pollution à Paris"
            intro="Prévision d’ une concentration en particules fines entre 45 et 55 µg/m³."/>
        </div>
        <div class="mt-[370px]">
            <p class="mt-6 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Le samedi 26 mars, la préfecture de Paris a décidé de mettre en place une circulation différenciée pour lutter contre un épisode de pollution “persistant”. 
            </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Seuls les véhicules Crit’Air 0, 1 et 2 sont autorisés à circuler dans le périmètre délimité par l’Autoroute A86.         </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Également une réduction de la vitesse maximal a été mis en place notamment sur l’autoroute passant de 130 km/h à 110 km/h, sur des voies rapides passant de 110 km/h à 90 km/h mais aussi sur des routes nationales et départementales passant de 80 km/h ou 90 km/h à 70 km/h.         </p>
            <p class="mt-4 mx-5 font-poppins text-base font-normal text-vert-fonce-typographie">
                Pour que la population puisse continuer à se déplacer sans leurs véhicules, les transports en commun ont activé un forfait journalier antipollution de 3, 80 euros ce qui permet à la population de pouvoir voyager de manière illimitée sur l’ensemble des transports en commun de la région. 
            </p>
            <p class="ml-52 font-poppins text-xs font-normal text-vert-fonce-typographie">(Source :  FranceInfo)</p>
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
