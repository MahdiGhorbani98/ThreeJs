//Scene
const scene = new THREE.Scene();

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //first param : FOV   //second param: Aspect ratio
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

//we should move the camera out of cube
// Three.js considers the forward/backward axis to be Z
