<template>
    <div class="nav-section ">
        <div class="container big-container">
            <div class="d-flex justify-content-between py-4 ">
                <img src="../assets/img/gym_logo_1x.png" alt="">
                <ul class="nav pt-5 ">
                    <li class="nav-item" v-for="product in products" :key="product.navLink">
                        <a class="nav-link text-uppercase link-secondary" href="#">{{product.navLink}}</a>
                    </li>
                </ul>
            </div>
            <div class="text-center">
                <div class=" text-uppercase banner-fs ">no pain no gain</div>
                <div class="banner-text">Motivation is what gets you started. Habit is what keeps you going.</div>
                <button class="btn-join-us">JOIN US TODAY</button>
            </div>
            
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
    .nav-section {
        background-image: url(../assets/img/home-banner.jpg);
        background-repeat: round;
        height: 800px;
    }

    .big-container {
        min-width: 1650px;
        color: white;
    }

    .banner-fs {
        font-size: 100px;
        margin-top: 105px;
        font-weight: 700;
    }

    .banner-text {
        font-size: 20px;
        margin-bottom: 35px;
    }

    .btn-join-us {
        color: white;
        border: 1px solid white;
        background-color: transparent;
        padding: 10px 20px;
        color: white;
        
    }

    .btn-join-us:hover {
        color: black;
        background-color: white;
    }
</style>