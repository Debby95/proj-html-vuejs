<template>
    <div class="section">
        <div class="container  text-white">
            <div class="text-center">
                <div class="title-section ">WORLD CLASS RESULTS</div>
                <img class="mt-4 mb-4" src="../assets/img/divider-xx-red.png" alt="">
            </div>
            
            <div class="row row-cols-2">
                <div class="col" v-for="result in results" :key="result.id">
                    <TheCard :result="result"></TheCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheCard from './TheCard.vue';

export default {
    name: "ResultsAndPerformance",
    components: {
        TheCard,
},
    data() {
        return {
            results: [
                {
                    "avatar": require(`../assets/img/review_1-compressor.jpg`),
                    "feedback": "The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it",
                    "user": "-Tara Smith"
                },
                {
                    "avatar": require(`../assets/img/review_3-compressor-2.jpg`),
                    "feedback": "The trainers at Avada Gym is amazing, the people are even better. All in all, is a great place to work out.",
                    "user": "-Simon Chel"
                },
                {
                    "avatar": require(`../assets/img/review_2-compressor.jpg`),
                    "feedback": "The facilities at Avada Gym stoof out to me the most. They are well maintained and have high quality equipment.",
                    "user": "-Jen Wirth"
                },
                {
                    "avatar": require(`../assets/img/review_4-compressor-2.jpg`),
                    "feedback": "No bad thing to say about Avada Gym, they are top notch at every corner and truly take care of their customers.",
                    "user": "-jeff Glum"
                },
            ]
        };
        
    },
}
</script>

<style>
</style>