<template>
    <div class="section">
        <div class="container">
            <div class="text-center">
                <div class="title-section">PERFORMANCE NEWS</div>
                <img class="xxmargin pb-5 pt-4" src="../assets/img/divider-xx-red.png" alt="">
            </div>

            <div class="row row-cols-3">
                <div class="col" v-for="perfNews in performanceNews" :key="perfNews.id">
                    <div class="perf-card text-white flex-row w-100 mb-3">
                        <!-- perf img -->
                        <div class="card-img">
                            <img :src="perfNews.perfImg" alt="">
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
            performanceNews: [
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
                {
                    "perfImg": require(`../assets/img/blog4-400x289.jpg`),
                    "perfTitle": "To be number one, train like you're number two",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
                {
                    "perfImg": require(`../assets/img/trainer3-400x297.jpg`),
                    "perfTitle": "Top 5 mistakes every gym member makes",
                    "perfText": "Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Donec pretium, torto vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]",
                },
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

    /*.perf-card {
        position: relative;
        bottom: 30px
    }*/
</style>