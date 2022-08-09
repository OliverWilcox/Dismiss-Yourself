<template>
  <div class="spinning-logo">
    <div class="yes"></div>
    <canvas class="webglspin"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
//import * as dat from "dat.gui";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
//import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
export default {
  mounted() {
    /*Cursor
     */
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = () => {
      console.log("start");
    };
    loadingManager.onProgress = () => {
      console.log("progress");
    };
    loadingManager.onError = () => {
      console.log("error");
    };
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const colorTexture = textureLoader.load("/dead.jpeg");

    colorTexture.minFilter = THREE.NearestFilter;
    colorTexture.wrapS = THREE.MirroredRepeatWrapping;
    colorTexture.wrapT = THREE.MirroredRepeatWrapping;
    colorTexture.offset;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    console.log(THREE);
    const scene = new THREE.Scene();
    const material = new THREE.MeshStandardMaterial({});
    material.wireframe = false;
    const group = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 100, 100),
      material
    );
    group.position.x = 0;
    group.geometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(group.geometry.attributes.uv.array, 2)
    );
    const camera = new THREE.PerspectiveCamera(
      14,
      sizes.width / sizes.height,
      0.2,
      600
    );
    camera.position.z = -70;
    camera.lookAt(group.position);
    scene.add(camera);
    const canvas = document.querySelector(".webglspin");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 10);
    camera.add(light);
    const loader = new OBJLoader();
    loader.load("New_Full_Head.obj", (obj) => {
      obj.rotation.x = 0;
      obj.rotation.y = 2;

      scene.add(obj);
      scene.add(obj);
      function animate() {
        requestAnimationFrame(animate);
        obj.rotation.y += 0.01;

        renderer.render(scene, camera);
      }
      animate();
    });
    const tick = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  },
};
</script>

<style>
.webglspin {
  position: fixed;
  left: 0;

  top: 0;

  background: none;
}
</style>
