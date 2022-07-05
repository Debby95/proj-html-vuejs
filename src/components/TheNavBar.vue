<template>
    <div class="theNavBar">
        <a class="nav-link text-uppercase link-secondary" href="#">{{product.navLink}}</a>
    </div>
</template>

<script>

export default {
    name: "TheNavBar",
    props: {
        product: Object,
    },
}
</script>

<style>

</style>