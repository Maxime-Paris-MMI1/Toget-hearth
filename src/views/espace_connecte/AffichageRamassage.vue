<template>
    <HeadercoClair/>
    <span class="flex flex-col gap-3 mt-16">
        <span class="font-lato text-center ">Cherchez le nom de votre ville</span>
        <input type="search" class="border-2 pl-2 w-[350px] ml-8 rounded-xl " v-model="query"/>

    </span>
    <div class="ml-8 mt-10">
            <Composantramassage v-for="ramassage in searchByName" :key="ramassage.id"
        :date="ramassage.date"
        :lieu="ramassage.lieu"
        :heure="ramassage.heure"
        :description="ramassage.description"

        />
    </div>
    <footer>
        <FootercoPage/>
    </footer>

</template>

<script>
import Composantramassage from '../../components/ComposantRamassage.vue'

import { 
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Fonctions Storage
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from '../../main.js'
import HeadercoClair from '../../components/HeadercoClair.vue'
import FootercoPage from '../../components/FootercoPage.vue'


export default {

    components:{Composantramassage, HeadercoClair, FootercoPage},

    data(){
        return{
            artiste:null, //pour la création
            listRam:[],
            query:'',

        }
    },
    computed:{
        searchByName(){
            console.log("search");
            let query = this.query;
                return this.listRam.filter(function(ramassage){
                    return ramassage.lieu.includes(query);
            })    
        },

    },

    mounted(){
      this.getRamassage();
    },

    methods:{
        async getRamassage(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document ramassage
            const dbRam = collection(firestore, "ramassage");
            const q = query(dbRam, orderBy('lieu', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listRam = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
            })      
        },
    },

    
  }
</script>
