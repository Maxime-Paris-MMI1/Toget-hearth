<template>

<header>
    <HeadercoClair/>
</header>


<VignetteRassemblement

        image="/images/fondrassemblement.webp"

        />  

 </template>


 <script>
import VignetteRassemblement from '../../components/VignetteRassemblement.vue'

import HeadercoClair from '../../components/HeadercoClair.vue'


export default {
    components: {HeadercoClair, VignetteRassemblement}
}
</script>