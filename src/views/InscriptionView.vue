<template>
    <div class="flex flex-row justify-between">
        <DecoHG />
        <RouterLink to="/" >
            <LogoSite class="mt-4 mr-5" />
        </RouterLink>
    </div>
    <h1 class="text-center font-asap text-xl font-normal -mt-12">Créer un compte</h1>
        <form @submit.prevent="onCreate">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Nom d’utilisateur</button>
                </div>
                <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="text" v-model="user.login" required/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Adresse email</button>
                </div>
                <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="email" v-model="user.email" required/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Mot de passe</button>
                </div>
                <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="password" v-model="user.password" required/>
            </div>
             <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="mt-9 mb-2 ml-6 font-poppins text-sm font-medium text-vert-fonce-typographie">Confirmation du mot de passe</button>
                </div>
                <input class="w-[327px] h-12 mx-6 form-control bg-blanc-vert-title rounded-3xl pl-3" type="password" v-model="password2" required/>
            </div>
             <div class="alert alert-warning text-center mb-3" v-if="message!=null">
            {{ message }}
            </div>
            <div class="flex justify-center items-center relative gap-2 px-7 py-2 rounded-22xl bg-vert-fluo-bouton mx-[88px]"
            style="box-shadow: 0px 1.5600000619888306px 1.5600000619888306px 2.017021417617798px rgba(0,0,0,0.25);">
                <button variant="dark" class="flex-grow-0 flex-shrink-0 text-base font-poppins font-medium text-left text-blanc-background drop-shadow-sm" type="submit">
                    Créer un compte
                </button>
            </div>           
        </form>
        <div class="flex flex-row justify-center gap-1">
        <p class="font-poppins text-center font-medium mt-5">Déjà inscrit ?</p>
        <RouterLink to="/connexion">
            <p class="text-vert-moyen-deco font-poppins text-center font-medium mt-5">Se connecter</p>
        </RouterLink>
    </div>
</template>

<script>
import DecoHG from '../components/icons/DecoHG.vue'
import LogoSite from '../components/icons/LogoSite.vue'
import Bouton from '../components/BoutonAction.vue'
import {emitter} from '../main.js'
import {
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    getDoc,
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    where
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'


export default {

    components:{DecoHG, LogoSite, Bouton},

    data(){
        return{
            user:{
                login:'',
                email:'',
                password:'',
            },
            password2:'',
            message:'hello',
            type:'password'
        }
    },
    mounted(){
        this.message = "Vous n'avez pas encore crée de compte";
    },
    methods:{
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                console.log("user", this.user);
                emitter.emit('connectUser', {user: this.user});
                this.message = "votre compte a bien été crée à l'addresse suivante : " + this.user.email;
                this.$router.push('/accueilco');
            })
            .catch((error)=>{
                console.log('erreur connexion', error);
                this.message = "erreur d'authentification";
            })
        },
        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
               emitter.emit('deConnectUser', {user:this.user});
            })
            .catch(error=>{
                console.log('erreur deconnexion', error);
            })
        },
        onCreate(){
            if(this.user.password===this.password2){
                createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                    .then((response) => {
                        // Signed in
                        const user = response.user;
                    })
                    .catch((error) => {
                        console.log('erreur création', error);
                        this.message = "erreur de création";
                })
               
                this.onCnx();
                onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const uid = user.uid;
                    const firestore = getFirestore();
                    const dbUser = collection(firestore, "users");
                    const docRef = addDoc(dbUser,{
                        uid: uid,
                        admin: false,
                        connecte: true,
                        basic: false,
                        login: this.user.login
                })
                console.log('document créé avec le id : ', docRef.id);
                } else {
                    console.log("user pas connecté")
                }
                });
               
            }else{
                this.message = "mot de passe pas cohérent"
                console.log('mauvais mot de passe')
            }
        },
    },
}
</script>