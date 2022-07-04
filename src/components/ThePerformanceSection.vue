<template>
    <div class="section">
        <div class="container">
            <div class="text-center">
                <div class="title-section">PERFORMANCE NEWS</div>
                <img class="xxmargin pb-5 pt-4" src="../assets/img/divider-xx-red.png" alt="">
            </div>

            <div class="row row-cols-3 ">
                <div class="col" v-for="perfNews in performance1" :key="perfNews.id">
                    <div class="perf-card-1 text-white flex-row w-100 mb-3">
                        <!-- perf img -->
                        <div class="card-img">
                            <img :src="perfNews.perfImg" alt="">
                            <div class="overlay left-overlay d-flex justify-content-center">
                                <i class="fa-solid fa-link d-flex align-items-center mx-3 "></i>
                                <i class="fa-solid fa-magnifying-glass d-flex align-items-center"></i>
                            </div>
                        </div>
                        <div class="card-perf-body px-5 py-5">
                            <div class="card-perf-title fs-4 fw-bold mb-2">{{perfNews.perfTitle}}</div>
                            <div class="card-perf-text text-secondary">{{perfNews.perfText}}</div>
                        </div>
                    </div>
                </div>
                <div class="col" v-for="perfNews in performance2" :key="perfNews.id">
                    <div class="perf-card-2 text-white flex-row w-100 mb-3">
                        <!-- perf img -->
                        <div class="card-img">
                            <img :src="perfNews.perfImg" alt="">
                            <div class="overlay left-overlay d-flex justify-content-center">
                                <i class="fa-solid fa-link d-flex align-items-center mx-3 "></i>
                                <i class="fa-solid fa-magnifying-glass d-flex align-items-center"></i>
                            </div>
                        </div>
                        <div class="card-perf-body px-5 py-5">
                            <div class="card-perf-title fs-4 fw-bold mb-2">{{perfNews.perfTitle}}</div>
                            <div class="card-perf-text text-secondary">{{perfNews.perfText}}</div>
                        </div>
                    </div>
                </div>
                <div class="col" v-for="perfNews in performance3" :key="perfNews.id">
                    <div class="perf-card-3 text-white flex-row w-100 mb-3">
                        <!-- perf img -->
                        <div class="card-img">
                            <img :src="perfNews.perfImg" alt="">
                            <div class="overlay left-overlay d-flex justify-content-center">
                                <i class="fa-solid fa-link d-flex align-items-center mx-3 "></i>
                                <i class="fa-solid fa-magnifying-glass d-flex align-items-center"></i>
                            </div>
                        </div>
                        <div class="card-perf-body px-5 py-5">
                            <div class="card-perf-title fs-4 fw-bold mb-2">{{perfNews.perfTitle}}</div>
                            <div class="card-perf-text text-secondary">{{perfNews.perfText}}</div>
                        </div>
                    </div>
                </div>
                <div class="col" v-for="perfNews in performance4" :key="perfNews.id">
                    <div class="perf-card-4 text-white flex-row w-100 mb-3">
                        <!-- perf img -->
                        <div class="card-img">
                            <img :src="perfNews.perfImg" alt="">
                            <div class="overlay left-overlay d-flex justify-content-center">
                                <i class="fa-solid fa-link d-flex align-items-center mx-3 "></i>
                                <i class="fa-solid fa-magnifying-glass d-flex align-items-center"></i>
                            </div>
                        </div>
                        <div class="card-perf-body px-5 py-5">
                            <div class="card-perf-title fs-4 fw-bold mb-2">{{perfNews.perfTitle}}</div>
                            <div class="card-perf-text text-secondary">{{perfNews.perfText}}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="text-center mt-5">
                <button class="btn-transparent">READ ALL ARTICLES</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThePerformanceSection",
    data() {
        return {
            performance1: [
                {
                    "perfImg": require(`../assets/img/blog1-400x208.jpg`),
                    "perfTitle": "Train with free weights or your body weight?",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
                {
                    "perfImg": require(`../assets/img/blog6-400x400.jpg`),
                    "perfTitle": "Nutritional advice that will keep you training",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
                {
                    "perfImg": require(`../assets/img/trainer4-400x297.jpg`),
                    "perfTitle": "Simple principles for you next workout",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
            
                
                
            ],
            performance2: [
                
                {
                    "perfImg": require(`../assets/img/blog4-400x289.jpg`),
                    "perfTitle": "To be number one, train like you're number two",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
                
                
            ],
            performance3: [
                {
                    "perfImg": require(`../assets/img/trainer3-400x297.jpg`),
                    "perfTitle": "Top 5 mistakes every gym member makes",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
                
                
            ],
            performance4: [
                {
                    "perfImg": require(`../assets/img/trainer1-400x297.jpg`),
                    "perfTitle": "The myths of shedding body fat explored",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
            ]
        }
    }
}
</script>

<style>
    .card-perf-body {
        background-color: #1E2123;
        height: 300px;
        width: 400px;
    }

    .overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(213, 98, 95, 0.82);
        overflow: hidden;
        width: 100%;
        height: 100%;
        transition: .5s ease;
    }

    .card-img {
        position: relative;
        overflow: hidden;
    }

    .left-overlay {
        right: 100%;
        height: 100%;
        left: auto;
    }

    .card-img:hover .left-overlay {
        right : 16px;
    }

    .perf-card-2 {
        position: relative;
        bottom: 185px;
    }

    .perf-card-4 {
        position: relative;
        bottom: 100px;
    }
</style>