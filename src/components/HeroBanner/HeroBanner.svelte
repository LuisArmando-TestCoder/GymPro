<script src="ts">
    import SVG from "./SVG.svelte";
</script>

<div class="draw-hero-effect">
    <SVG />
</div>

<style lang="scss">
    :global(.draw-hero-effect) {
        padding-top: 10rem;
    }

    :global(.svg) {
        width: 100%;
        position: relative;
        transform: translateY(-100px);
        animation: originalY 1.5s forwards;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1);
    }

    :global(.animated-path) {
        fill: transparent;
        stroke-dasharray: 900; /* Adjust based on path length */
        stroke-dashoffset: 900; /* Initially hidden */
        animation:
            drawPath 3s ease-in-out forwards,
            fillPath 1s ease-in-out forwards 3s;
    }

    @keyframes originalY {
        to {
            transform: translateY(0);
        }
    }

    @keyframes drawPath {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fillPath {
        to {
            fill: var(
                --color-foreground
            ); /* Replace with your desired fill color */
        }
    }
</style>
