<template>
    <div class="bg-white rounded-18xl p-10 opacity-80 ">

        <div class="flex gap-4 justify-center text-white font-poppins font-light text-sm mb-10">

            <div class="bg-vert-fonce-typographie shadow-lg p-4  rounded-14xl">
                <p>{{stat1}}</p>

            </div>

                        <div class="bg-vert-fonce-typographie shadow-lg p-4  rounded-14xl">
                <p>{{stat2}}</p>

            </div>

                        <div class="bg-vert-fonce-typographie shadow-lg p-4  rounded-14xl flex">
                <p>{{stat3}}</p>
                <Userlogo/>

            </div>

        </div>

        <div class="font-poppins">
            <h2 class=" text-xl font-medium mb-5">
                {{titre}}
            </h2>

        <p class=" font-light">
            {{description}}
        </p>
        </div>

        <div >




<div
  class=" flex justify-center p-5 mr-24 ml-24 m rounded-[48px] bg-[#6f934d] mt-10 focus:bg-zinc-600 mb-10"
  
  style="box-shadow: 0px 3.8399999141693115px 3.8399999141693115px 0 rgba(0,0,0,0.25);"
>
  <svg 
    width="41"
    height="45"
    viewBox="0 0 41 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-grow-0 flex-shrink-0"
    preserveAspectRatio="none"
  >
    <path
      d="M3 25L16.44 41.4C20.92 32.0667 31.416 11.32 37.56 3"
      stroke="white"
      stroke-width="5.76"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
 
</div>


</div>

    </div>





    </template>

    <script>
import Userlogo from "./icons/Userlogo.vue";
export default {
    props: {
        stat1: {type: String,
        default:"1 point"
        },

        stat3: {type: String,
        default:"1"
        },

        stat2:{ type: String,
        default:"20min"},

        titre: {type: String,
        default:"Défi exemple"},

        description: {type: String,
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada urna vitae quam ultrices, sit amet facilisis nibh dapibus. Sed id felis vel quam sollicitudin convallis et quis sapien. Vestibulum leo nunc, dignissim in malesuada ac, efficitur sed tortor. Duis non nulla eu nunc commodo tincidunt vitae molestie libero. Etiam lacinia bibendum lectus. Ut non arcu gravida, consequat urna et, pretium ex. Morbi ac elit sed enim tincidunt scelerisque. Ut mattis et velit eget mollis."}
    },
    components: { Userlogo }
}


</script>





