<template>
    <div class="section">
        <!-- World class fitness section -->
        <div class="container">
            <div class="text-center">
                <div class="title-section">WORLD CLASS Fitness</div>
                <img class="mt-4 mb-4" src="../assets/img/divider-xx-red.png" alt="">
                <div class="text-secondary ">At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped to help your reach your goals of a healthy and fit lifestyle.</div>
            </div>
        </div>
        <!-- form section -->
        <div class="text-white d-flex justify-content-around form-section">
            <div class="row">
                <!-- col with img form -->
                <div class="col">
                    <img src="../assets/img/home_img-compressor-400x222.jpg" alt="">
                </div>
                <div class="col">
                    <h5>Sign Up For A Free Training Session!</h5>
                    <form>
                        <!-- name input -->
                        <div class="form-group text-secondary">
                            <label for="exampleInputName">Name*</label>
                            <input type="name" class="form-control bg-dark">
                        </div>
                        <!-- email input -->
                        <div class="form-group text-secondary">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" class="form-control bg-dark">
                        </div>
                        
                        <!-- button form -->
                        <button type="submit" class="btn-start-now">START NOW!</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- activity section -->
        <div class="gym-bg d-flex justify-content-center pt-5 text-center">
            <div class="row">
                <div class="col">
                    <div class="card bg-transparent border-0">
                        <div class="card-icon">
                            <i class="fa-solid fa-dumbbell icon"></i>
                        </div>
                        <div class="card-body">
                            <div class="card-title">Strenght & Conditioning</div>
                            <img src="../assets/img/divider-x-red.png" alt="">
                            <div class="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-transparent border-0">
                        <div class="card-icon">
                            <i class="fa-solid fa-bicycle icon"></i>
                        </div>
                        <div class="card-body">
                            <div class="card-title">Fitness & Cardio</div>
                            <img src="../assets/img/divider-x-red.png" alt="">
                            <div class="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-transparent border-0">
                        <div class="card-icon">
                            <i class="fa-solid fa-infinity icon"></i>
                        </div>
                        <div class="card-body border-0">
                            <div class="card-title">Flexibility & Rest</div>
                            <img src="../assets/img/divider-x-red.png" alt="">
                            <div class="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-transparent border-0">
                        <div class="card-icon">
                            <i class="fa-solid fa-heart-pulse icon"></i>
                        </div>
                        <div class="card-body ">
                            <div class="card-title">Health & Diet</div>
                            <img src="../assets/img/divider-x-red.png" alt="">
                            <div class="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
export default {
    name: "TheMain",

}
</script>

<style>
    h5 {
        margin-left: 20px;
    }

    .section {
        background-color: #25292B;
        
    }   

    .container {
        padding-bottom: 70px;
    }

    .title-section {
        color: white;
        font-size: 30px;
        padding-top: 70px;
    }

    .form-section {
        padding-top: 100px;
        background-color: #1E2123;
        height: 420px;
    }

    .form-group {
        width: 400px;
        margin: 20px;
    }

    .btn-start-now {
        background-color: #EE6059;
        width: 400px;
        color: white;
        padding: 10px;
        margin-left: 20px;
    }

    .gym-bg {
        background-image: url(../assets/img/gym_bkgd_bw-compressor.jpg);
        height: 400px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .card {
        width: 300px;
    }

    .card-title {
        color: white;
    }

    .card-text {
        color: grey;
    }

    .icon {
        border: 1px solid #EE6059;
        border-radius: 60px;
        color: #EE6059;
        padding: 20px;
    }
</style>