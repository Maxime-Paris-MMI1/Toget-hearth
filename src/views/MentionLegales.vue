<template>
    <header>
        <HeaderClair/>
    </header>
    <main>
        <div>
            <h2 class="font-asap font-semibold text-lg w-80 ml-7 mt-8">Bienvenue sur les mentions légales de notre site !</h2>
            <p class="w-80 ml-10 mt-8 font-poppins font-normal text">
                Projet réalisé dans le cadre d’un exercice pédagogique au département
                <span><a class="underline" href="http://mmimontbeliard.com/">MMI de Montbéliard</a> </span> 
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">    
            <h3 class="font-asap font-semibold text-lg  ">Collecte de l’information</h3>
            <RondMention class="ml-2"/>
            </div>
            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                Nous recueillons des informations lorsque vous nous contacter via le formulaire
                de contact de notre site. Les informations recueillies incluent votre nom et votre
                adresse e-mail.
                En outre, nous recevons et enregistrons automatiquement des informations
                à partir de votre ordinateur et navigateur, y compris votre adresse IP,
                vos logiciels et votre matériel, et la page que vous demandez.
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8"> 
                <h3 class="font-asap font-semibold text-lg">Utilisation des informations</h3>
                <RondMention class="ml-2"/>
            </div>

            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                Toute les informations que nous recueillons auprès de vous peuvent être utilisées pour :

                Vous contacter par e-mail pour répondre à vos demandes envoyées via notre formulaire de contact.
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">
                <h3 class="font-asap font-semibold text-lg">Divulgation à des tiers</h3>
                <RondMention class="ml-2"/>
            </div>


            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles
                identifiables à des tiers. Nous pensons qu’il est nécessaire de partager des informations
                afin d’enquêter, de prévenir ou de prendre des mesures concernant des activités illégales,
                fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique
                de toute personne, violations de nos conditions d’utilisation,
                ou quand la loi nous y contraint.
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">
                <h3 class="font-asap font-semibold text-lg">Est-ce que nous utilisons des cookies ?</h3>
                <RondMention class="ml-2"/>
            </div>


            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                Oui Toget’heart utilise Google Analytics afin de mesurer l’audience de son site.
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">
                <h3 class="font-asap font-semibold text-lg">Consentement</h3>
                <RondMention class="ml-2"/>
            </div>


            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">
                <h3 class="font-asap font-semibold text-lg">Exercer vos droits</h3>
                <RondMention class="ml-2"/>
            </div>


            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                Pour toute information ou exercice de vos droits Informatique et Libertés
                sur les traitements de données personnelles gérés par Toget’hearth,
                vous pouvez contacter son délégué à la protection des données (DPO) :

            </p>
            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-8">
                par ce formulaire
                ou par courrier (avec copie de votre pièce d’identité en cas d’exercice de vos droits) à l’adresse suivante :
                Toget’hearth
                A l’attention du délégué à la protection des données (DPO)
                4 Place Tharradin, 
                25200 Montbéliard
            </p>

        </div>
        <div>
            <div class="flex flex-row mt-12 ml-8">
                <h3 class="font-asap font-semibold text-lg">Contact</h3>
                <RondMention class="ml-2"/>
            </div>

            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-5">
                Contact des contributeurs du site: <br>
                Bryan Ferry
            </p>
            <p class="font-poppins font-light text-[11px] ml-8">
                <span><a href="mailto:bryan.ferry@edu.univ-fcomte.fr">→ bryan.ferry@edu.univ-fcomte.fr</a></span> 
            </p>
            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-1">
                Maxime Paris
            </p>
            <p class="font-poppins font-light text-[11px] ml-8">
                <span><a href="mailto:maxime.paris02@edu.univ-fcomte.fr">→ maxime.paris02@edu.univ-fcomte.fr</a></span> 
            </p>
            <p class="font-poppins font-normal text-xs mr-3 ml-8 mt-1">
                Justine Duval
            </p>
            <p class="font-poppins font-light text-[11px] ml-8 mb-14">
                <span><a href="mailto:justine.duval@edu.univ-fcomte.fr">→ justine.duval@edu.univ-fcomte.fr</a></span> 
            </p>
        </div>
    </main>
    <footer>
        <FooterPage/>
    </footer>
</template>

<script>
import HeaderClair from "../components/HeaderClair.vue"
import FooterPage from "../components/FooterPage.vue"
import RondMention from "../components/icons/RondMention.vue"

export default {
   components: { HeaderClair, FooterPage, RondMention} 
}
</script>