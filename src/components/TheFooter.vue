<template>
    <footer>
        <div class="section-footer">
            <div class="container pt-5 ">
                <div class="row row-cols-4">
                    <div class="col">
                        <div class="text-secondary pb-4">COME FIND US</div>
                        <div class="text-white">
                            <div class="mb-2">12345 North Main Street </div>
                            <div class="mb-2">New York, NY 555555</div>
                            <div class="mb-2">Phone: 1.800.555.6789</div>
                            <div>Email: info@your-domain.com</div>
                        </div>
                    </div>
                    <div class="col" v-for="info in infoFooter" :key="info.id">
                        <TheFooterLink :info="info"></TheFooterLink>
                        
                    </div>
                    <div class="col">
                        <div class="text-secondary pb-4">OPENING TIMES</div>
                        <div class="text-white">
                            <div class="mb-2">Weekdays Monday-Friday</div>
                            <div class="text-secondary mb-2">09:00 - 19:00</div>
                            <div class="mb-2">Weekends Saturday-Sunday</div>
                            <div class="text-secondary">09:00 - 21:00</div>
                        </div>
                    </div>
                    <div class="col">
                        <img src="../assets/img/gym_ad-compressor.jpg" alt="">
                    </div>
                </div>

                
            </div>
        </div>
    </footer>
</template>

<script>
import TheFooterLink from "./TheFooterLink.vue";

export default {
    name: "TheFooter",
    data() {
        return {
            infoFooter: [
                {
                    "question": "> Train with free weights or your body weight?",
                    "question2": "> Nutritional advice that will keep you training",
                },
            ]
        };
    },
    components: { TheFooterLink }
}
</script>

<style>
    .section-footer {
        background-color: #25292B;
        max-height: 350px;
    }



</style>