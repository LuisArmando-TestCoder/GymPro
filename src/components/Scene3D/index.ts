import * as THREE from "three";
import presetScene, { actions, consulters, type types } from "scene-preset";
import scene from "./scene";
import type { BlacklistParameters } from "scene-preset/lib/actions/blacklistObjects";

let sceneEvents: {
  sceneGroup: THREE.Group;
  onSetup(canvasState: { [index: string]: any }): void;
  onAnimation(canvasState: { [index: string]: any }): void;
};

// actions.addSceneSetupIntrude(
//   ({ presetConfiguration, camera }: { [index: string]: any }) => {
//     presetConfiguration.ambient.color = 0x000000;
//     // camera?.setFocalLength(20);
//   }
// );

export default (id: string) =>
  presetScene(
    {
      async setup(canvasState: { [index: string]: any }) {
        sceneEvents = await consulters.getSceneLifeCycle(scene);

        sceneEvents?.onSetup(canvasState);
      },
      animate(canvasState: { [index: string]: any }) {
        sceneEvents?.onAnimation(canvasState);

        actions.blacklistObjects({
          scene: canvasState.scene,
          blacklist: ["SimpleCube", "SimpleFloor", "SimpleSphere"],
        } as BlacklistParameters);

        actions.blacklistControls([
          "setCanvasAutoFocus",
          "setFirstPersonDirection",
          "setFirstPersonFlying",
          "setFirstPersonPosition",
          "setFirstPersonZoom",
        ]);
      },
    },
    `#${id}`
  );
