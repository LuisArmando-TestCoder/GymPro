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
  .navigation {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    width: 100px;
    margin: auto;
    padding-bottom: 50px;

    .button {
      font-family: var(--font-title);
      padding: 15px 0;
      border: 0;
      color: var(--color-outline);
      background: var(--color-foreground);
      filter: saturate(2);
      transform: skew(-5deg);
      cursor: pointer;

      &:hover {
        color: var(--color-foreground);
        background: var(--color-outline);
        filter: brightness(1.25);
      }
    }
  }

  .carousel {
    background: var(--color-background-inversion);
  }
</style>
