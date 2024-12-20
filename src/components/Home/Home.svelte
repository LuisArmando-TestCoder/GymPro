<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const band = document.querySelector(".scrolling-band");
        const spans = Array.from(band.children);

        const lefts = [];
        let totalWidth = 0;

        spans.forEach((span, i) => {
            const rect = span.getBoundingClientRect();
            lefts[i] = rect.left;
            span.style.left = `${lefts[i]}px`;
            totalWidth += span.offsetWidth;
        });

        const updatePositions = () => {
            spans.forEach((span, i) => {
                lefts[i] -= speed;
                span.style.position = "absolute";

                if (lefts[i] < -span.clientWidth - 20) {
                    const indexBefore =
                        (i +
                            spans.length * -Math.sign(Math.min(i, 1) - 1) -
                            1) %
                        spans.length;

                    lefts[i] =
                        spans[indexBefore].offsetWidth +
                        lefts[indexBefore] +
                        10;
                }

                span.style.left = `${lefts[i]}px`;
            });
        };

        const interval = setInterval(updatePositions, 16);
    });
</script>

<div class="logo">
    <img class="image" src="./title.png" />
</div>

<div class="button-container">
    <a href="/redirection" class="button" aria-label="Comprar ahora"
        >COMPRAR AHORA</a
    >
</div>

<div class="footer">
    <div class="scrolling-band">
        <span>LOS PRODUCTOS</span>
        <span>ENVÍOS A TODO EL PAÍS</span>
        <span>ASESORÍA PERSONALIZADA</span>
        <span>NUEVA LÍNEA</span>
        <span>+5068888888</span>
    </div>
</div>

<style lang="scss">
    @import "./style.scss";
</style>
