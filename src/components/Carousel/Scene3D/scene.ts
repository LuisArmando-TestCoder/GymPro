import * as THREE from "three";
import type {
  SceneExport,
  Scenes,
} from "scene-preset/lib/consulters/getSceneLifeCycle";
import { currentIndex, videos } from "../store";
import gsap from "gsap";
import { get } from "svelte/store";

// Función externa para crear un elemento de video a partir de una URL.
export function getVideo(url: string): HTMLVideoElement {
  const video = document.createElement("video");
  video.src = url;
  video.crossOrigin = "anonymous"; // Permite el acceso a recursos externos si es necesario.
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.load();
  return video;
}

function getPlaneVideo3D(video: HTMLVideoElement): THREE.Mesh {
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;
  videoTexture.flipY = true;

  // Crea el material con la textura de video y lo hace visible desde ambos lados.
  const material = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.DoubleSide,
  });

  // Crea la geometría del plano para mostrar el video.
  const geometry = new THREE.PlaneGeometry(1, 2); // Relación de aspecto común 9:16

  // Devuelve el Mesh con el video aplicado.
  return new THREE.Mesh(geometry, material);
}

function getVideos(urls: string[]): {
  videosGroup: THREE.Group;
  videos: HTMLVideoElement[];
} {
  const videosGroup = new THREE.Group();
  const videos = urls.map((url, index) => {
    const video = getVideo(url);

    const planeVideo3D = getPlaneVideo3D(video);

    videosGroup.add(planeVideo3D);

    video.play();

    if (index)
      setTimeout(() => {
        video.pause();
      }, 3e3);

    return video;
  });

  return { videosGroup, videos };
}

let htmlVideos: HTMLVideoElement[];

export default {
  videos: {
    object: async (): Promise<THREE.Group> => {
      videos.set([
        "./videos/Beneficios de los aminoacidos.mp4",
        "./videos/COMO PREPARAR CREATINA.mp4",
        "./videos/ENTRENO 2.mp4",
        "./videos/GYM PRO FINAL.mp4",
        "./videos/Video patrocinado 2.mp4",
        // "./videos/vitaminico.mp4",
      ]);

      const videosObject = getVideos(get(videos));

      htmlVideos = videosObject.videos;

      return videosObject.videosGroup;
    },

    onSetup({ object3D }: SceneExport) {
      object3D.position.set(0, 2, 5);

      object3D.children.forEach((child, index) => {
        const displacementZ = Math.ceil(index / 2);
        const displacementX = displacementZ * Math.sign(-(index % 2) + 1 / 2);
        child.rotation.y +=
          -(displacementZ / object3D.children.length) *
            Math.sign(displacementX) *
            Math.PI +
          Math.PI;
        const displacements = [
          [0, 0.95, 1.575],
          [0, 0.3, 0.6],
        ];
        child.position.set(
          Math.sign(displacementX) * displacements[0][displacementZ],
          0,
          displacementZ * displacements[1][displacementZ]
        );
      });
      const originalChildren = getOriginal(
        object3D.children.map(({ position, rotation }) => ({
          position,
          rotation,
        }))
      );

      currentIndex.subscribe((index) => {
        console.clear();

        object3D.children.forEach((child, childIndex) => {
          const newIndex =
            (index + childIndex + get(videos).length) % get(videos).length;
          // console.log(
          //   "newIndex",
          //   index,
          //   newIndex,
          //   child.position,
          //   originalChildren[newIndex].rotation
          // );
          htmlVideos[newIndex].pause();

          gsap
            .timeline()
            .to(child.position, {
              y: (childIndex % 2) * 2,
            })
            .to(child.position, {
              x: originalChildren[newIndex].position.x,
            })
            .to(child.position, {
              z: originalChildren[newIndex].position.z,
            })
            .to(child.rotation, {
              y: originalChildren[newIndex].rotation._y,
            })
            .to(child.position, {
              y: 0,
            });

          if (originalChildren[newIndex].position.x === 0) {
            htmlVideos[childIndex].play();
          }
        });
      });
    },

    onAnimation: ({ object3D }: SceneExport) => {
      // object3D.children.forEach((child, index) => {
      //   child.rotation.y += 1;
      // });
    },
  } as unknown,
} as Scenes;

function getOriginal(item: any) {
  return JSON.parse(JSON.stringify(item));
}
