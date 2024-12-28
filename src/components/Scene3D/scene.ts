import Victor from "victor";
import * as THREE from "three";
import { events, consulters } from "scene-preset";
// import { CanvasState } from "scene-preset/lib/types/state";
// import { Scene, Scenes, SceneExport } from "scene-preset/lib/types/consulters";
import gsap from "gsap";

// import Image from "./meshes/Image";
// import Text from "./meshes/Text";
// import Model from "./meshes/Model";
import getTextureMaterial from "./materials/getTextureMaterial";
// import getQuixelMaterial from "./materials/getQuixelMaterial";

const scale = 4;
const distance = 5;
const height = 1;
const space = 3;

export default {
  pictures: {
    object: async () => {
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const geometry = new THREE.PlaneGeometry(2, 2);
      return new THREE.Mesh(geometry, material);
    },
    onSetup({ canvasState }) {
      const { scene } = canvasState;
      const picture = scene.children[0] as THREE.Mesh;
      picture.position.set(0, 0, 0);
    },
    onAnimation: () => {
        
    },
  } as unknown,
};