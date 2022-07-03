<template>
    <div class="section">
        <div class="container  text-white">
            <div class="pb-5">
                <div class="text-center">
                    <div class="title-section ">WORLD CLASS RESULTS</div>
                    <img class="xxmargin" src="../assets/img/divider-xx-red.png" alt="">
                </div>

                <div class="row row-cols-2">
                    <div class="col" v-for="result in results" :key="result.id">
                        <TheCard :result="result"></TheCard>
                        <div class="card bg-dark flex-row w-100 mb-3">
                            <div class="card-img">
                                <img :src="result.avatar" alt="">
                            </div>
                            <div class="card-body">
                                <div class="card-text-review">{{result.feedback}}</div>
                                <div class="card-user-name">{{result.user}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="pt-5">
                <div class="text-center ">
                    <div class="title-section ">HIGH PERFORMANCE FACILITIES</div>
                    <img class="xxmargin" src="../assets/img/divider-xx-red.png" alt="">
                </div>
                <div class="row row-cols-3">
                    <div class="col" v-for="result in gymPicture" :key="result.id">
                        <TheCard :result="result"></TheCard>
                    </div>
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
            ],
            gymPicture: [
                {
                    "picture": require(`../assets/img/home-image1.jpg`),
                },
                {
                    "picture": require(`../assets/img/home-image2.jpg`),
                },
                {
                    "picture": require(`../assets/img/home-image3.jpg`),
                },
                {
                    "picture": require(`../assets/img/home-image4.jpg`),
                },
                {
                    "picture": require(`../assets/img/home-image54.jpg`),
                },
                {
                    "picture": require(`../assets/img/home-image6.jpg`),
                },
                
            ]
            
        };
        
    },
}
</script>

<style>
    .xxmargin {
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>