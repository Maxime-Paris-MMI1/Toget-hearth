<template>
<Vignette
image="/images/profil.webp"
nom="Clara Gomez"
age="25 ans"
/> 



<div>
    <button type="button"
    @click="onDcnx()" >
    Deconnexion
    </button>
</div>

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

export default {
    components: {Vignette},

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
