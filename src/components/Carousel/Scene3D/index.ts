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
      async setup(canvasState: types.state.CanvasState) {
        sceneEvents = await consulters.getSceneLifeCycle(scene);

        sceneEvents?.onSetup(canvasState);
      },
      animate(canvasState: types.state.CanvasState) {
        sceneEvents?.onAnimation(canvasState);

        canvasState.renderer?.setClearColor(
          getCSSVariableValue("--color-background-inversion")
        );

        actions.blacklistObjects({
          scene: canvasState.scene,
          blacklist: [
            "SimpleCube",
            "SimpleFloor",
            "SimpleSphere",
            "SimpleLightSet",
          ],
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

function getCSSVariableValue(variableName: string) {
  const rootStyles = getComputedStyle(document.documentElement);
  return rootStyles.getPropertyValue(variableName).trim();
}
