<template>
    <div class="flex justify-center">
        <RouterLink to="/accueilco">
            <LogoGrand/>
        </RouterLink>
    </div>

    <h1 class="font-asap text-2xl text-center border-b-2">Gérer l'évenement</h1>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-center">
        <RouterLink to="/organisationramassage"> <div class=" bg-vert-fluo-bouton text-white font-asap px-10 py-4 rounded-2xl"><p>Créer +</p></div> </RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
            <p class="font-asap text-xl font-medium text-center mb-5">Tapez pour rechercher le nom de l'évènement à modifier</p>
          <div class="flex flex-row justify-center gap-3">
              <input type="search" class="w-full rounded-xl h-10 text-black px-4 bg-vert-pastel-deco placeholder:text-vert-fonce-typographie mb-5" placeholder="Recherche par nom" v-model="query">
          </div>

          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th>Date</th>
                    <th>Lieu</th>
                    <th>Heure</th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="ramassage in searchByName" :key="ramassage.id" class="mt-2 pb-10">
                    <td class="text-center font-poppins ">{{ramassage.date}}</td>
                    <td class="text-center font-poppins ">{{ramassage.lieu}}</td>
                    <td class="text-center font-poppins ">{{ramassage.heure}}</td>

                    <td class="text-center lg:w-1/4">
                        

                        <RouterLink :to="{ name:'deleteramassage', params: { id: ramassage.id }}">
                         <div class=" p-7 bg-vert-moyen-deco text-white font-asap px-2 py-1 rounded-2xl mb-1 effet-shadowblanc hover:bg-violet-900 ml-1 mt-2 ">
                            Supprimer
                        </div>
                        </RouterLink>

                        <RouterLink :to="{ name:'modiframassage', params: { id: ramassage.id }}">
                            <div class="bg-vert-fluo-bouton text-white font-asap px-2 py-1 rounded-2xl effet-shadowblanc hover:bg-violet-900 mb-7 ml-1">
                                Modifier
                            </div>
                        </RouterLink>

                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
  <footer>
      <FootercoPage/>
  </footer>
</template>

<script>
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
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

import LogoGrand from "../../components/icons/LogoGrand.vue" 
import FootercoPage from "../../components/FootercoPage.vue" 

export default {
   
   components:{
       LogoGrand, FootercoPage,
   },

    data(){
        return{
            listRam:[],
            query:'',
        }
    },
    mounted(){
      this.getRamassage();
    },
    methods:{
      async getRamassage(){
        const firestore = getFirestore();
          const dbRam = collection(firestore, "ramassage");
          const q = query(dbRam, orderBy('lieu', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.listRam = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          })
      },
    },
    computed:{
        searchByName(){
            let query = this.query;
                return this.listRam.filter(function(ramassage){
                    return ramassage.lieu.includes(query);
            })    
        },

    }
}
</script>