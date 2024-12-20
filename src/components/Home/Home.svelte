<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const band = document.querySelector(".scrolling-band");
        const spans = Array.from(band.children); // Convert NodeList to array

        // Set up initial positions
        const lefts = [];
        let totalWidth = 0;

        spans.forEach((span, i) => {
            const rect = span.getBoundingClientRect();
            lefts[i] = rect.left; // Get initial position relative to the screen
            span.style.left = `${lefts[i]}px`; // Apply absolute positioning
            totalWidth += span.offsetWidth; // Calculate total width of all spans
        });

        // Animation step
        const speed = 1; // Pixels to move per frame
        const updatePositions = () => {
            spans.forEach((span, i) => {
                // Update left position
                lefts[i] -= speed;
                span.style.position = "absolute";

                // If span is out of view, reset its position
                if (lefts[i] < -span.clientWidth - 20) {
                    const indexBefore = ((i + spans.length * -Math.sign(Math.min(i, 1) - 1)) - 1) % spans.length;

                    lefts[i] = spans[indexBefore].offsetWidth + lefts[indexBefore] + 10;
                }

                // Apply updated position
                span.style.left = `${lefts[i]}px`;
            });
        };

        // Start animation with setInterval
        const interval = setInterval(updatePositions, 16); // ~60 FPS
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
