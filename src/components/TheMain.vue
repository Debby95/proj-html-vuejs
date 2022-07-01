<template>
    <div class="section">
        <div class="container">
            <div>
                <div class="title-section">WORLD CLASS Fitness</div>
                <img class="mt-4 mb-4" src="../assets/img/divider-xx-red.png" alt="">
                <div class="text-secondary ">At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped to help your reach your goals of a healthy and fit lifestyle.</div>
            </div>
        </div>
        <div class="text-white d-flex justify-content-around form-section">
            <div class="row">
                <div class="col">
                    <img src="../assets/img/home_img-compressor-400x222.jpg" alt="">
                </div>
                <div class="col">
                    <h5>Sign Up For A Free Training Session!</h5>
                    <form>
                        <div class="form-group text-secondary">
                            <label for="exampleInputName">Name*</label>
                            <input type="name" class="form-control bg-dark">
                        </div>
                        <div class="form-group text-secondary">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" class="form-control bg-dark">
                        </div>
                            
                        <button type="submit" class="btn-start-now">START NOW!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
</script>

<style>
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

    .home {
        height: 300px;
    }

    .form-section {
        padding-top: 100px;
        background-color: #1E2123;
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
    }
</style>