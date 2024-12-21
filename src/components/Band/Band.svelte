<script lang="ts">
    import { onMount } from "svelte";

    const speed = 1;

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

<div class="footer">
    <div class="scrolling-band">
        <span>OFERTAS DEL MES</span>
        <span>PROGRAMA DE FIDELIDAD</span>
        <span>SUSCRÍBETE A NUESTRO BOLETÍN</span>
        <span>GARANTÍA DE SATISFACCIÓN</span>
        <span>¡NUEVA PROMO 2X1!</span>
        <span>CONSULTA NUESTRO BLOG</span>
        <span>+5068888888</span>
        <span>HORARIO DE ATENCIÓN: LUN-VIE 9AM-6PM</span>
        <span>DESCARGA NUESTRA APP</span>
        <span>ENCUÉNTRANOS EN REDES SOCIALES</span>
    </div>
</div>

<style lang="scss">
    @import "./style.scss";
</style>
