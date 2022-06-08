<template>


<header>
    <HeadercoClair/>
</header>


<h4 class=" font-asap text-lg p-11">Merci pour votre réservation !
Grâce à vous vous aider un peu plus la planète à se sentir mieux !</h4>


<div class=" flex justify-center w/75">
   <img src="/public/images/remerciement_figure.webp" alt="remiercement figure">
</div>

<h4 class="font-asap text-lg p-11 ">À bientôt sur la récolte de déchets ;)</h4>
<h4 class="font-asap text-lg p-11">Vous pouvez à présent :</h4>



<BoutonAction
        :fluo="true"
        titrebouton="Lire nos conseils "
        lien= "/conseilecoco"
/>



<footer>
    <FootercoPage/>
</footer>
</template>


 <script>
import HeadercoClair from '../../components/HeadercoClair.vue'
import FootercoPage from '../../components/FootercoPage.vue'
import BoutonAction from '../../components/BoutonAction.vue'



export default {
    components: {HeadercoClair,FootercoPage,BoutonAction},


}
</script>