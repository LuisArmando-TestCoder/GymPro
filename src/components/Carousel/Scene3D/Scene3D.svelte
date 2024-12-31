<script lang="ts">
  import { onMount } from "svelte";
  import scene from ".";
  import { actions } from "scene-preset";

  let id = "AppCanvas";

  onMount(() => {
    actions.addSceneSetupIntrude(
      ({ presetConfiguration, camera }: { [index: string]: any }) => {
        presetConfiguration.ambient.color = 0x000000;
        // camera?.setFocalLength(20);
      }
    );
    scene(id);
  });
</script>

<div class="canvas-container canvas-3d">
  <canvas class="canvas-container__canvas" id="AppCanvas" tabIndex={0} />
</div>

<style lang="scss">
  .canvas-container {
    // pointer-events: none;
    height: 50vw;

    &__canvas {
      display: block;
    }
  }
</style>
