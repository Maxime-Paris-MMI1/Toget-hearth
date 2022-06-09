<template>
<header>
    <div class="flex flex-row justify-between" >
        <div class="pt-8 pl-5">
            <a href="javascript:history.back()"><ArrowLeftIcon class="text-black w-[34px] relative z-40"/></a>
        </div>
        <div class="flex flex-col gap-3 mt-8 mr-8">
            <RouterLink to="/"><PencilAltIcon class="w-[32px]  text-black relative z-40"/></RouterLink>
            <div>
                <button type="button"
                @click="onDcnx()" >
                <LogoutIcon class="w-[32px]  text-black relative z-40"/>
                </button>
            </div>
        </div>
    </div>
</header>
<Vignette class="-mt-[115px]"
image="/images/profil.webp"
nom="Clara Gomez"
age="25 ans"
/> 


<div class=" bg-base-vert pt-6 font-poppins text-lg mb-5">
<p>Défis réalisés :</p>
<!-- faire carroussel ici -->
</div>

<div class="w-full flex gap-5 snap-x overflow-x-auto lg:hidden">
    <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <img src="public/images/vignette_profil_0.webp" alt="Vignette profil">
    </div>

    <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <img src="/public/images/vignette_profil_1.webp" alt="Vignette profil">
    </div>

    <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <img src="/public/images/vignette_profil_2.webp" alt="Vignette profil">
    </div>

    <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <img src="/public/images/vignette_profil_3.webp" alt="Vignette profil">
    </div>

    <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <img src="/public/images/vignette_profil_4.webp" alt="Vignette profil">
    </div>
</div>

<div class="font-poppins text-lg p-7">
    <p class=" text-xl mb-2 ">Prochain événement : </p>
    <p class=" mb-2">Date : <span class=" font-light"> Le 3 janvier 2022 à 14h00 </span> </p>
    <p class=" mb-2">Lieu : <span class=" font-light"> Lyon, Place Bellcour   </span> </p>
    <p class=" mb-2">Description : <span class=" font-light"> Rassemblement place Bellecour à Lyon pour faire une collecte de déchets autour de la place ainsi que dans le parc de la Tête d’or pour nettoyer au maximum la plaine.</span> </p>
</div>

<div class="bg-blanc-vert-title border border-black rounded-full mr-24 p-3 ml-5 ">
    <p class=" font-poppins font-medium text-lg  ">
        Nombre de points : <span class=" text-vert-fluo-bouton text-xl"> 2000</span>
    </p>
</div>

<h2 class=" font-poppins text-center text-2xl mt-10 "> Trophées</h2>

<div class=" flex justify-center items-center pl-5 pr-5 gap-2 pt-7">
    <img class="w-1/5" src="/public/images/trophy1.svg" alt="trophy">
    <img class="w-1/5" src="/public/images/trophy2.svg" alt="trophy">
    <img class="w-1/5" src="/public/images/trophy3.svg" alt="trophy">
    <img  class="w-1/5" src="/public/images/trophy4.svg" alt="trophy">
</div>

<div class=" flex justify-center items-center pl-5 pr-5 gap-2 pt-7 pb-10">
    <img class="w-1/5" src="/public/images/trophy7.svg" alt="trophy">
    <img class="w-1/5" src="/public/images/trophyvide.svg" alt="trophy">
    <img class="w-1/5" src="/public/images/trophyvide.svg" alt="trophy">
    
</div>

<BoutonAction
                :fluo="true"
                titrebouton= "Liste des trophées"
                lien="/trophy"/>


<footer class=" pt-16">
    <FootercoPage/>
</footer>
</template>

<script>

import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../../main.js';

import Vignette from '../../components/VignetteProfil.vue'
import BoutonAction from '../../components/BoutonAction.vue'


import { ArrowLeftIcon, LogoutIcon, PencilAltIcon } from "@heroicons/vue/outline";
import FootercoPage from '../../components/FootercoPage.vue';

export default {
    components: { Vignette, ArrowLeftIcon, LogoutIcon, PencilAltIcon, BoutonAction, FootercoPage },

    methods:{
        onDcnx(){
            // Se déconnecter
            signOut(getAuth())
            .then(response =>{
                // Mise à jour du message
                this.message = "User non connecté";
                // Ré initialisation des champs
                this.user = {
                    email:null,
                    password:null
                };
                // Emission évènement de déconnexion
                emitter.emit('deConnectUser', { user: this.user });
                window.location.pathname = '/'
            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },
    }
}
</script>
