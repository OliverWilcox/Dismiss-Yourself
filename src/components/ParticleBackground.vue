<template>
  <div class="spinning-logo">
    <div class="yes"></div>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";

//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//import * as dat from "dat.gui";
//import * as dat from "dat.gui";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
export default {
  mounted() {
    // const gui = new dat.GUI();

    // Canvas

    const canvas = document.querySelector("canvas");

    const textureLoader = new THREE.TextureLoader();
    const circles = textureLoader.load("blackcircle.png");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

    // Materials

    const material = new THREE.PointsMaterial({
      size: 0.0,
    });

    //particlesMaterial.color = new THREE.Color(0x0000000);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      //posArray[i] = Math.random();
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Mesh
    const sphere = new THREE.Points(geometry, material);
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.002,
      map: circles,
      transparent: true,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(sphere, particlesMesh);

    // Lights

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //Mouse

    /**
     * Animate
     */
    renderer.setClearColor(0xffffff);

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;
      particlesMesh.rotation.y = elapsedTime * 0.01;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  },
};
</script>

<style>
.webgl {
  position: fixed;

  left: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -3;
  background: rgb(255, 255, 255);
}
</style>
