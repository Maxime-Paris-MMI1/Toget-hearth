<template>

<div class=" bg-vert-moyen-deco m-5  mr-20 ml-20   mb-5   p-5 text-center rounded-10xl">
    <p class=" font-poppins font-medium text-xl text-white">
        {{texte}}
    </p>
</div>

<div class=" flex justify-center" >

    <img :src="trophyimg" alt=" trophy">

    
</div>

<p class=" font-poppins font-medium text-xl text-center px-10 pb-20 pt-2 " >{{intitule}}</p>


</template>

<script>
export default {
    props: {
        texte: {type: String,
        default:"0 points"
        },

        trophyimg: {type: String,
        default:"/public/images/trophyvide"
        },

        intitule:{ type: String,
        default:"Grade"},

      
    },
}


</script>