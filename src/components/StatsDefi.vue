<template>
    <div class="bg-white rounded-18xl p-10 opacity-80 ">

        <div class="flex gap-10 justify-center text-white font-poppins font-light text-sm mb-10">

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

    </div>

    </template>

    <script>
import Userlogo from "./icons/Userlogo.vue";
export default {
    props: {
        stat1: String,
        stat3: String,
        stat2: String,
        titre: String,
        description: String,
    },
    components: { Userlogo }
}
</script>





