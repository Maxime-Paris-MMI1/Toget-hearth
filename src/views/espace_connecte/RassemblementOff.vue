<template>

<header>
    <HeadercoClair/>
</header>


<VignetteRassemblement

        image="/images/rassemblementlieu.webp"

        />  


    <main class="mt-[360px] bg-gradient-to-t from-vert-pastel-deco to-blanc-background  ">
<h1 class=" text-2xl font-poppins font-medium text-center text-black mb-24">Rassemblement à Lyon, Place Bellcour
03/01/2022</h1>

<RouterLink to="/profil">


<div class=" px-5 pb-16 ">
<div class=" text-center bg-vert-pastel-deco rounded-full py-3  ">
<p class=" font-poppins font-light text-xl">Organisé par </p>

<p class=" font-poppins font-extralight text-lg underline">@claragomez26</p>
</div>
</div>
</RouterLink>

<h3 class=" font-poppins text-2xl text-center mb-6">Début de l’évènement :

</h3>

<p class="font-poppins text-xl text-center mb-20">14h00</p>

<h2 class=" text-2xl font-poppins font-semibold text-center text-black mb-10">Detail</h2>

<p class=" font-poppins font-extralight px-6 text-lg mb-14">Rassemblement place Bellecour à Lyon pour faire une collecte de déchets autour de la place ainsi que dans le parc de la Tête d’or pour nettoyer au maximum la plaine.</p>

<div class=" ">

           

        <BoutonAction
        :vertmoyen="true"
        titrebouton="Rejoindre"
        lien= "/remerciement" />

</div>

<footer class=" mt-24">
    <FootercoPage/>
</footer>
        </main>

 </template>


 <script>
import VignetteRassemblement from '../../components/VignetteRassemblement.vue'
import BoutonAction from '../../components/BoutonAction.vue'
import HeadercoClair from '../../components/HeadercoClair.vue'
import FootercoPage from "../../components/FootercoPage.vue" 


export default {
    components: {HeadercoClair, VignetteRassemblement,BoutonAction,FootercoPage},


}
</script>