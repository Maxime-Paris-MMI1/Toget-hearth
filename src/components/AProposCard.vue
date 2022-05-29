<template>
<div class=" min-w-[360px] max-w-[445px] mx-auto my-auto w-full">

<div class=" mt-3"
 style="filter: drop-shadow(0px 8px 10px rgba(0,0,0,0.5));">


<div class=" flex justify-center text-center ">

<div class="  absolute max-w-xl mt-10">

    <div class=" flex justify-center">
<img class=" h-2/5 px-10 pt-10  " :src="image" alt="">

</div>

<h2 class=" font-asap text-2xl  ">{{nom}}</h2>
<h3 class="font-poppins text-lg   ">{{formation}} </h3>


</div>
</div>

    <img class=" object-cover mx-auto my-auto w-full pl-10 pr-10 pt-16 max-w-[700px] " src="../../public/images/rectangle1_apropos.jpg" alt="fond a propos">

</div>

<div>

<p class="font-poppins text-sm p-20 absolute z-20 mt-20 break-words w-[400px] overflow-hidden pl-22 ">{{texte_description}}</p>


    <img class=" object-cover mx-auto my-auto w-full p-10 max-w-[700px] -mt-40  " src="../../public/images/rectangle2_apropos.webp" alt="fond a propos"
    style="filter: drop-shadow(0px 8px 10px rgba(0,0,0,0.5));">

    
</div>
</div>

<div class=" flex justify-center space-x-10 w-full">

<a :href="lienlinkedin">  <img src="../../public/images/linkedin.webp" alt="linkedin"> </a>
<a :href="lieninsta"> <img src="../../public/images/instagram.webp" alt="instagram"> </a> 

</div>



</template>

<script>

export default {
    props: {
         image: {type: String,
       
        },
        lienlinkedin: {type: String,
       
        },
        lieninstagram: {type: String,
       
        },
        

        nom: {type: String,
        default:"Jean Dupont"
        },

        formation: {type: String,
        default:"BUT MMI"
        },
        

        texte_description:{ type: String,
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada urna vitae quam ultrices, sit amet facilisis nibh dapibus. Sed id felis vel quam sollicitudin convallis et quis sapien. Vestibulum leo nunc, dignissim in malesuada ac, efficitur sed tortor. Duis non nulla eu nunc commodo tincidunt vitae molestie libero. Etiam lacinia bibendum lectus. Ut non arcu gravida, consequat urna et, pretium ex."},

    
    },
 
}
</script>