<template>
    <div class="section ">
        <div class="container">
            <div class="d-flex justify-content-between py-5 ">
                <img src="../assets/img/gym_logo_1x.png" alt="">
                <ul class="nav pt-5 ">
                    <li class="nav-item" v-for="product in products" :key="product.navLink">
                        <a class="nav-link disabled text-uppercase text-white" href="#">{{product.navLink}}</a>
                    </li>
                </ul>
            </div>
            <div class="text-white text-uppercase banner-fs">no pain no gain</div>
            <div class="banner-text text-white">Motivation is what gets you started. Habit is what keeps you going.</div>
            <button>JOIN US TODAY</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            products: [
                {
                    "navLink": "Home"
                },
                {
                    "navLink": "About us"
                },
                {
                    "navLink": "Facilities"
                },
                {
                    "navLink": "Mermbership"
                },
                {
                    "navLink": "Testimonials"
                },
                {
                    "navLink": "Blog"
                },
            ]
        }
    }
}
</script>

<style>
    .section {
        background-image: url(../assets/img/home-banner.jpg);
        background-repeat: round;
        height: 1100px;
    }

    .banner-fs {
        font-size: 80px;
        margin-top: 180px;
        font-weight: 700;
    }

    .banner-text {
        font-size: 16px;
        margin-bottom: 35px;
    }

    button {
        color: white;
        border: 1px solid white;
        background-color: transparent;
        padding: 10px 20px;
        color: white;
    }

    button:hover {
        color: black;
        background-color: white;
}
</style>