<template>
    <header>
        <HeadercoClair/>
    </header>
    <main>
        <div>
            <img class=" absolute w-full h-[797px] object-cover" src="/public/images/don.webp" alt="pollution">
        </div>
        <div class="absolute mt-48 mx-7">
            <h2 class="font-poppins font-medium text-2xl text-center mx-10 text-white">Vous souhaitez faire un geste pour aider notre planète ? </h2>
        </div>

        <div class="flex justify-center">
        <div class="absolute mt-96 mx-7">
            <a href="https://www.paypal.com/fr/home">
                <BoutonAction 
                :fluo="true"
                titrebouton= "Faire un don"/>
            </a>
        </div>
        </div>
        <p class="absolute font-poppins font-medium text-white mt-[655px] text-xl ml-3">
            En faisant un don de 2€ vous aidez la planète a replanter 2 arbres
        </p>
    </main>
    <footer class="mt-[756px] relative">
        <FootercoPage/>
    </footer>


</template>

<script>
import HeadercoClair from "../../components/HeadercoClair.vue"
import BoutonAction from "../../components/BoutonAction.vue"
import FootercoPage from "../../components/FootercoPage.vue"

export default {
   components: { HeadercoClair, BoutonAction, FootercoPage} 
}
</script>
