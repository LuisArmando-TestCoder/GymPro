<script lang="ts">
  import { get, writable } from "svelte/store";
  import Scene3D from "./Scene3D/Scene3D.svelte";
  import { currentIndex, videos } from "./store";

  // Navigate to the next video
  const next = () => {
    currentIndex.set(($currentIndex + 1) % $videos.length);
  };

  // Navigate to the previous video
  const prev = () => {
    currentIndex.set(($currentIndex - 1 + $videos.length) % $videos.length);
  };
</script>

<div class="carousel">
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
