<template>


<header>
    <HeadercoClair/>
</header>


<h4 class=" font-asap text-lg p-11">Merci pour votre réservation !
Grâce à vous vous aider un peu plus la planète à se sentir mieux !</h4>


<div class=" flex justify-center w/75">
   <img src="/public/images/remerciement_figure.webp" alt="remiercement figure">
</div>

<h4 class="font-asap text-lg p-11">Votre date est désormais inscrite dans le calendrier ainsi que le lieu. En ésperant que beaucoup de monde participent à votre rammassage !</h4>



<p class=" text-center font-asap text-sm p-8">P.S: N’oubliez pas les consignes de précautions pour le ramassage de déchets. Toutes les informations se trouvent </p>

<RouterLink to="/ ">
<div class=" px-32 ">
    <p class=" text-center font-asap text-lg text-white bg-black rounded-full p-5 ">ICI</p>
</div>
</RouterLink>



<footer>
    <FootercoPage/>
</footer>
</template>


 <script>
import HeadercoClair from '../../components/HeadercoClair.vue'
import FootercoPage from '../../components/FootercoPage.vue'



export default {
    components: {HeadercoClair,FootercoPage},


}
</script>