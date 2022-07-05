<template>
    <div class="theNavBar">
        
        <a class="nav-link text-uppercase link-secondary" href="#">{{product.navLink}}</a>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
}
</script>

<style>

</style>