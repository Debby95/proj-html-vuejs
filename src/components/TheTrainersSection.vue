<template>
    <div class="trainers-section">
        <div class="container">
            <div class="text-center">
                <div class="title-section">MEET OUR TRAINERS</div>
                <img class="xxmargin pb-5 pt-4" src="../assets/img/divider-xx-red.png" alt="">
            </div>
            <div class="row row-cols-3">
                <div class="col" v-for="trainer in trainers" :key="trainer.id">
                    <div class="trainers-card text-white flex-row w-100 mb-3">
                        <!-- trainers img -->
                        <div class="card-img">
                            <img :src="trainer.trainerImg" alt="">
                        </div>
                        <div class="card-trainer-body px-5 py-5">
                            <!-- trainers name -->
                            <div class="mb-4 fw-bold fs-5">
                                <div class="card-trainer-name">{{trainer.trainerTitle}}</div>
                                <div class="card-role">{{trainer.role}}</div>
                            </div>
                            
                            <div class="card-text fs-5">{{trainer.trainerText}}</div>
                            <!-- social trainers icons -->
                            <div class="social-icons pt-4">
                                <i class="fa-brands fa-facebook-f si"></i>
                                <i class="fa-brands fa-twitter si"></i>
                                <i class="fa-brands fa-instagram si"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <button class="btn-transparent">VIEW ALL TRAINERS</button>
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
                    "trainerTitle": "Ann Baker",
                    "role": "Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
                {
                    "trainerImg": require(`../assets/img/trainer3-400x297.jpg`),
                    "trainerTitle": "Anne Warron",
                    "role": "Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
                {
                    "trainerImg": require(`../assets/img/trainer4-400x297.jpg`),
                    "trainerTitle": "Peter Rice",
                    "role": "Personal Trainer",
                    "trainerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nicl, onare volutpat.",
                },
            ]
        }
    }
}
</script>

<style>
    .trainers-section {
        background-color: #1E2123;
    }

    .card-trainer-body {
        background-color: #25292B;
        height: 350px;
        max-width: 400px;
    }

    .si {
        margin-right: 20px;
    }

    .card-img:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }


</style>