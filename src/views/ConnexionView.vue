<template>
    <div class="flex flex-row justify-between">
    <DecoHG />
    <RouterLink to="/" >
    <LogoSite class="mt-4 mr-5" />
    </RouterLink>
    </div>
    <h1 class="text-center font-asap text-xl font-normal">Connexion</h1>
    <form @submit.prevent="onCnx">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Adresse-email</button>
            </div>
            <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="text" v-model="user.email" required />
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Mot de passe</button>
            </div>
            <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="password" v-model="user.password" required/>
        </div>
        <div class="alert alert-warning text-center mb-3" v-if="message!=null">
            {{ message }}
        </div>
        <p class="text-vert-moyen-deco font-poppins text-right font-medium mb-10 mr-6 text-sm mt-10">Mot de passe oublié ?</p>
        <div class="flex justify-center items-center relative gap-2 px-7 py-2 rounded-22xl bg-vert-fluo-bouton mx-[88px]"
            style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0,0,0,0.25);">
            <button variant="dark" class="flex-grow-0 flex-shrink-0 text-base font-poppins font-medium text-left text-blanc-background drop-shadow-sm" type="submit">
                Se connecter
            </button>
        </div>
    </form>
    <div class="flex flex-row justify-center gap-1">
        <p class="font-poppins text-center font-medium mt-10">Pas encore inscrit ?</p>
        <RouterLink to="/inscription">
            <p class="text-vert-moyen-deco font-poppins text-center font-medium mt-10">S’inscrire</p>
        </RouterLink>
    </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../main.js';
 
import DecoHG from '../components/icons/DecoHG.vue'
import LogoSite from '../components/icons/LogoSite.vue'
import Bouton from '../components/BoutonAction.vue'


export default {
    components: { DecoHG, LogoSite, Bouton },
    data(){
        return{
            user:{
                email : '',
                password : ''
            },
            message:null,
            type:'password',
        }
    },
    methods:{
        onCnx(){                
            // Se connecter avec user et mot de passe           
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response)=>{
                // Connexion OK - mise à jour du user
                this.$router.push('/accueilco');
                console.log('user connecté', response.user);
                this.user = response.user;
                // Emission evenement de connexion
                emitter.emit('connectUser', { user: this.user });
                console.log("user",this.user);                
                // Mise à jour du message
                this.message = "User connecté : "+this.user.email;
            })
            .catch((error) =>{
                // Erreur de connexion
                console.log('Erreur connexion', error);
                this.message = "Erreur d'authentification";
                this.$router.push('/accueilco');
            })
        },
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
