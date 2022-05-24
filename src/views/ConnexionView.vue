<template>
    <div class="flex flex-row justify-between">
    <DecoHG />
    <RouterLink to="/" >
    <LogoSite class="mt-4 mr-5" />
    </RouterLink>
    </div>
    <h1 class="text-center font-asap text-xl font-normal">Connexion</h1>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import DecoHG from '../components/icons/DecoHG.vue'
import LogoSite from '../components/icons/LogoSite.vue'

export default {
    components: { DecoHG, LogoSite },
}
</script>
