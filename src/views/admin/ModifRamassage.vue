<template>
    <h1 class="font-asap text-2xl text-center border-b-2 mb-20">Modifier un évènement</h1>

     <div class="mt-12 px-5 flex flex-col gap-20 relative mb-20">
        <form @submit.prevent="updateRamassage">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black overflow-hidden rounded-2xl">
                        <div class="bg-vert-fluo-bouton px-5 border-[1px] flex justify-center items-center font-asap">Date</div>
                        <input class="w-full  p-5 font-asap bg-white border-2" type="text" placeholder="Date de l'évenement" v-model="ramassage.date" required>
                    </div>

                    <div class="flex h-12 text-black rounded-2xl overflow-hidden">
                        <p class="bg-vert-fluo-bouton leading-5 -mt-2 px-6 py-3 border-[1px] font-asap ">Lieu</p>
                        <input class="w-full  p-5  font-asap bg-white border-2" type="text" placeholder="Lieu de l'évenement" v-model="ramassage.lieu" required>
                    </div>

                    <div class="flex h-12 text-black rounded-2xl overflow-hidden">
                        <p class="bg-vert-fluo-bouton leading-5 -mt-2 px-6 py-3 border-[1px] font-asap ">Heure</p>
                        <input class="w-full  p-5  font-asap bg-white border-2" type="text" placeholder="Heure de l'évenement" v-model="ramassage.heure" required>
                    </div>

                    <div class="flex h-12 text-black rounded-2xl overflow-hidden">
                        <p class="bg-vert-fluo-bouton leading-5 -mt-2 px-6 py-3 border-[1px] font-asap ">Description</p>
                        <input class="w-full  p-5  font-asap bg-white border-2" type="text" placeholder="Description de l'évenement" v-model="ramassage.description" required>
                    </div>


                </div>
            </div>
            
            <div class="grid grid-cols-2 w-full place-items-center mt-14">
                <button class="font-montserrat py-2 px-5 bg-vert-moyen-deco rounded-2xl text-white mb-20" type="button"><RouterLink to="/gestionramassage">Annuler</RouterLink></button>
                <button class="font-montserrat py-2 px-5 bg-vert-fluo-bouton rounded-2xl text-white mb-20" type="submit">Modifier</button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
export default {
    data(){
        return{ 
            ramassage:{   
                date:null,   
                description:null, 
                heure:null,
                lieu:null,
            },  
            refRamassage:null,     
        }
    },
    mounted(){
        this.getRamassage(this.$route.params.id);
    },
    methods:{

      async getRamassage(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "ramassage", id);
          this.refRamassage = await getDoc(docRef);
          if(this.refRamassage.exists()){
              this.ramassage = this.refRamassage.data();
          }else{
              this.console.log("ramassage inexistant");
          }
      },

      async updateRamassage(){
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "ramassage", this.$route.params.id), this.ramassage);
          this.$router.push('/gestionramassage');
      }
    }

}
</script>
