<template>
    <div class="flex flex-row justify-between">
    <DecoHG />
    <RouterLink to="/" >
    <LogoSite class="mt-4 mr-5" />
    </RouterLink>
    </div>
    <h1 class="text-center font-asap text-xl font-normal">Connexion</h1>
    <form @submit.prevent="onCnx()">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Adresse-email</button>
            </div>
            <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl" type="text" v-model="user.email" required/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Mot de passe</button>
            </div>
            <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl" type="password" c-model="user.password" required/>
        </div>
        <div class="alert alert-warning text-center mb-3" v-if="message!=null">
            {{ message }}
        </div>
        <div class="flex justify-center items-center relative gap-2 px-7 py-2 rounded-22xl bg-vert-fluo-bouton mx-[88px]"
            style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0,0,0,0.25);">
            <button variant="dark" class="flex-grow-0 flex-shrink-0 text-base font-poppins font-medium text-left text-blanc-background drop-shadow-sm" type="submit">
                Se connecter
            </button>
        </div>
    </form>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js' 
import DecoHG from '../components/icons/DecoHG.vue'
import LogoSite from '../components/icons/LogoSite.vue'
import Bouton from '../components/BoutonAction.vue'


export default {
    components: { DecoHG, LogoSite, Bouton },
    data(){
        return{
            user:{
                email:null,
                password:null
            },
            message:null
        }
    },
    methods:{
        onCnx(){                
                signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                .then((response)=>{
                    console.log('user connecté', response.user);
                    this.user = response.user;
                    this.message = "User connecté : "+this.user.email;
                })
                .catch((error) =>{
                    console.log('Erreur connexion', error);
                    this.message = "Erreur d'authentification";
                })
            },
    }
}
</script>
