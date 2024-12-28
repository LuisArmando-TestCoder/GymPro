<script lang="ts">
    import { get } from "svelte/store";
    import Scene3D from "../Scene3D/Scene3D.svelte";

    export let videos: string[] = [];

    let currentIndex = 0;

    // Navigate to the next video
    const next = () => {
        currentIndex = (currentIndex + 1) % videos.length;
    };

    // Navigate to the previous video
    const prev = () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    };

    function getRotation(index: number, rotation: number) {
        return -rotation + (index / videos.length * rotation) * 2;
    }

    function getTranslationZ(index: number, scale: number) {
        return -Math.abs(getRotation(index, scale));
    }


</script>

<div class="carousel">
    <div class="carousel-container">
        {#each videos as video, index}
            <div class="video-container" style="transform: translateZ({
                        getTranslationZ(index, 2500)
                    }px);">
                <video
                    style="transform: rotateY({
                        getRotation(index, 90)
                    }deg);"
                    class="video {index === currentIndex ? 'active' : ''}"
                    src={video}
                    autoplay={index === currentIndex}
                    loop
                    muted
                ></video>
                <!--  -->
            </div>
        {/each}
    </div>

    <Scene3D />

    <div class="navigation">
        <button class="button" on:click={prev}>&lt;</button>
        <button class="button" on:click={next}>&gt;</button>
    </div>
</div>

<style lang="scss">
    .navigation .button {
        font-family: var(--font-title);
    }

    .carousel-container {
        display: flex;
        transition: transform 0.5s;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .video-container {
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .video {
        display: inline-block;
        width: 100%;
        height: 100%;
        max-width: 300px;
        object-fit: cover;
    }
</style>
