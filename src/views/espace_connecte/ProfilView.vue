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
import { ArrowLeftIcon, LogoutIcon, PencilAltIcon } from "@heroicons/vue/outline";

export default {
    components: {Vignette, ArrowLeftIcon, LogoutIcon, PencilAltIcon},

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
