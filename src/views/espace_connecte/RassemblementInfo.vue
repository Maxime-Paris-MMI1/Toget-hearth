<template>

 <header>
     <HeadercoClair/>
 </header>

<VignetteRassemblement
        image="/images/fondrassemblement.webp"
        titre1="Collecte de déchets"
        titre2=" 3 / 01 / 2022"
        />  

    <main class="mt-[360px] ">


<div class=" flex items-center justify-center gap-8 mb-16">

            <p class=" font-poppins font-light text-black text-2xl">11h00</p> 

        <BoutonAction
        :vertmoyen="true"
        titrebouton="Marseille"
        lien= "/" />

</div>

<div class=" flex items-center justify-center gap-8 mb-16">

            <p class=" font-poppins font-light text-black text-2xl">14h00</p> 

        <BoutonAction
        :vertmoyen="true"
        titrebouton="Lyon"
        lien= "/" />

</div>


<div class=" flex items-center justify-center gap-8 mb-16">

            <p class=" font-poppins font-light text-black text-2xl">15h30</p> 

        <BoutonAction
        :vertmoyen="true"
        titrebouton="Strasbourg"
        lien= "/" />

</div>

<div class=" flex items-center justify-center gap-8 mb-16">
    
            <p class=" font-poppins font-light text-black text-2xl">15h30</p> 

        <BoutonAction
        :vertmoyen="true"
        titrebouton="Paris"
        lien= "/" />
    
</div>



<div class=" font-poppins font-extralight text-lg text-center mb-16">

<p>Vous ne trouvez pas votre ville ?</p>
<p>Organisez un événement dès maintenant</p>

</div>



        <BoutonAction
        :fluo="true"
        titrebouton="Organiser un ramassage"
        lien= "/organisationramassage" />


    </main>

<footer class=" mt-24">
    <FootercoPage/>
</footer>

</template>


<script>
import VignetteRassemblement from '../../components/VignetteRassemblement.vue'

import HeadercoClair from '../../components/HeadercoClair.vue'
import BoutonAction from '../../components/BoutonAction.vue'
import FootercoPage from "../../components/FootercoPage.vue" 

export default {
    components: { VignetteRassemblement, HeadercoClair,BoutonAction,FootercoPage }
}
</script>