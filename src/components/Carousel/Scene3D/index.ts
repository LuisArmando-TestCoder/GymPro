import * as THREE from "three";
import presetScene, { actions, consulters, type types } from "scene-preset";
import scene from "./scene";
import type { BlacklistParameters } from "scene-preset/lib/actions/blacklistObjects";
import { SimpleLightSet } from "scene-preset/lib/components";

let sceneEvents: {
  sceneGroup: THREE.Group;
  onSetup(canvasState: { [index: string]: any }): void;
  onAnimation(canvasState: { [index: string]: any }): void;
};

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
          blacklist: ["SimpleCube", "SimpleFloor", "SimpleSphere", "SimpleLightSet"],
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
