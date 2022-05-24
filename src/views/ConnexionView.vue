<template>
    <div class="flex flex-row justify-between">
    <DecoHG />
    <RouterLink to="/" >
    <LogoSite class="mt-4 mr-5" />
    </RouterLink>
    </div>
    <h1 class="text-center font-asap text-xl font-normal">Connexion</h1>
    <Bouton 
    titrebouton="Se connecter"
    lien="/"/>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import DecoHG from '../components/icons/DecoHG.vue'
import LogoSite from '../components/icons/LogoSite.vue'
import Bouton from '../components/BoutonAction.vue'

export default {
    components: { DecoHG, LogoSite, Bouton },
}
</script>
