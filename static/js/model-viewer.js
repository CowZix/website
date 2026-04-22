import * as THREE from "https://esm.sh/three@0.160.0";
import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("model");
const modelUrl = container.dataset.model;

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 1, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.minDistance = 1;
controls.maxDistance = 10;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 1.2));

const dir = new THREE.DirectionalLight(0xffffff, 1);
dir.position.set(5, 10, 7);
scene.add(dir);

// Loader
const loader = new GLTFLoader();

let model;

console.log("Loading")
loader.load(
    modelUrl,
    (gltf) => {
        model = gltf.scene;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);
        model.rotation.y = Math.PI;

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / Math.tan(fov / 2));

        camera.position.set(0, 1, cameraZ);
        camera.lookAt(0, 0, 0);

        controls.target.set(0, 0, 0);
        controls.update();
        
    },
    undefined,
    (err) => console.error("LOAD ERROR:", err)
);

console.log("Model URL:", modelUrl);

// Animation loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    if (model) {
        model.position.y = Math.sin(time) * 0.1;
    }

    controls.update();
    renderer.render(scene, camera);
}
console.log(container.clientWidth, container.clientHeight);
animate();

// Handle resize (important improvement)
window.addEventListener("resize", () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});