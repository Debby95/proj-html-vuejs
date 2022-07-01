<template>
    <div class="section">
        <div class="container big-container">
            <div class="d-flex justify-content-between py-5">
                <img src="../assets/img/gym_logo_1x.png" alt="">
                <ul class="nav pt-5">
                    <li class="nav-item" v-for="product in products" :key="product.navLink">
                        <a class="nav-link disabled text-uppercase" href="#">{{product.navLink}}</a>
                    </li>
                </ul>
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
    .section {
        background-image: url(../assets/img/home-banner.jpg);
        background-repeat: round;
        height: 1100px;
    }

    .big-container {
        min-width: 1890px;
    }
</style>