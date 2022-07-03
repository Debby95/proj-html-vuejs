<template>
    <div class="section">
        <div class="container">
            <div class="text-center">
                <div class="title-section ">MEET OUR TRAINERS</div>
                <img class="xxmargin" src="../assets/img/divider-xx-red.png" alt="">
            </div>
            <div class="row row-cols-3">
                <div class="col" v-for="trainer in trainers" :key="trainer.id">
                    <div class="trainers-card text-white bg-dark flex-row w-100 mb-3">
                        <div class="card-img">
                            <img :src="trainer.trainerImg" alt="">
                        </div>
                        <div class="card-body">
                            <div class="card-trainer-name">{{trainer.trainerTitle}}</div>
                            <div class="card-text">{{trainer.trainerText}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheTrainersSection",
    data() {
        return {
            trainers: [
                {
                    "trainerImg": require(`../assets/img/trainer1-400x297.jpg`),
                    "trainerTitle": "Ann Baker Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
                {
                    "trainerImg": require(`../assets/img/trainer3-400x297.jpg`),
                    "trainerTitle": "Anne Warron Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
                {
                    "trainerImg": require(`../assets/img/trainer4-400x297.jpg`),
                    "trainerTitle": "Peter Rice Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
            ]
        }
    }
}
</script>

<style>
    .trainers-card {
        height: 600px;
    }
</style>