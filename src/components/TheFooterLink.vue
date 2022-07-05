<template>
    <div class="theFooterLink">
        <div class="text-secondary pb-4">RECENT POSTS</div>
        <div class="text-white">
            <div>{{info.question}}</div>
            <hr>
            <div>{{info.question2}}</div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheFooterLink",
    props: {
        info: Object,

    },

}
</script>

<style>

</style>