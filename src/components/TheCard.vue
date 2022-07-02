<template>
    <div class="theCard">
        <img class="pb-5" :src="result.picture" alt="">
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