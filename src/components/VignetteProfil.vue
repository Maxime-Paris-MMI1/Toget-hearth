<template>
    <div>
        <img class=" max-h-[333px] min-h-[333px] w-full h-48 object-cover" :src="image" alt="">
        <div class="-mt-[290px]">
          <div class="w-[100%] h-[107px] absolute mt-[266px] rounded-t-18xl  bg-blanc-background"></div>
          </div>
          <div class="relative z-40">
          <h1 class="text-center font-poppins text-2xl mt-72">{{nom}}</h1>
          <h2 class="text-center font-poppins text-xl">{{age}}</h2>
          </div>
        </div>
        

    
</template>

<script>
export default {
  props: {
    image: String,
    nom: String,
    age: String, 
  }
}
</script>
