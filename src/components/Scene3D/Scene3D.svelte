<script lang="ts">
  import { onMount } from "svelte";
  import scene from "./";

  let id = "AppCanvas";

  onMount(() => {
    scene(id);
  });
</script>

<div class="canvas-container canvas-3d">
  <canvas class="canvas-container__canvas" id="AppCanvas" tabIndex={0} />
</div>

<style lang="scss">
  .canvas-container {
    pointer-events: none;
    min-height: 100vh;

    &__canvas {
      display: block;
    }
  }
</style>
