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
    .theCard:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition-duration: .5s ;
    }
</style>