<script lang="ts">
    import Band from "../Band/Band.svelte";
    import HeroBanner from "../HeroBanner/HeroBanner.svelte";
</script>

<div class="logo">
    <div class="image">
        <HeroBanner/>
    </div>
</div>

<div class="button-container">
    <a href="/redirection" class="button" aria-label="Comprar ahora"
        >COMPRAR AHORA</a
    >
</div>

<!-- <Band/> -->

<style lang="scss">
    @import "./style.scss";
</style>
