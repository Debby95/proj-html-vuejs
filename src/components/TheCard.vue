<template>
    <div class="theCard">
        <div class="card bg-dark flex-row w-100 mb-3">
            <div class="card-img">
                <img :src="result.avatar" alt="">
            </div>
            <div class="card-body">
                <div class="card-text-review">{{result.feedback}}</div>
                <div class="card-user-name">{{result.user}}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        result: Object,
    },

}
</script>

<style>
    .card {
        padding: 20px;
    }
</style>