import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const renderers = [];

// Create a butterfly scene for every div contains the class butterfly
document.querySelectorAll('.butterfly').forEach(async function (e) {
	await new Promise(function (resolve) {
		setTimeout(resolve, Math.random() * 100);
	});

	const renderer = new THREE.WebGLRenderer({ alpha: true });

	const scene = new THREE.Scene();
	scene.add(new THREE.AmbientLight(0xffffff, 1.3));
	const topLight = new THREE.DirectionalLight(0xffffff, 1);
	topLight.position.set(500, 500, 500);
	scene.add(topLight);

	const camera = new THREE.PerspectiveCamera(10, e.clientWidth / e.clientHeight, 0.1, 1000);
	camera.position.z = 13;

	let mixer;
	new GLTFLoader().load(
		'scripts/butterfly.glb',
		function (gltf) {
			const butterfly = gltf.scene;
			scene.add(butterfly);
			butterfly.scale.set(0.2, 0.2, 0.2);
			butterfly.position.set(1, 0.5, 0.25);
			butterfly.rotation.x = 0;
			butterfly.rotation.y = Math.PI / 2;
			butterfly.rotation.z = 0;
			mixer = new THREE.AnimationMixer(butterfly);
			mixer.clipAction(gltf.animations[0]).play();
		},
		function (xhr) {},
		function (error) {}
	);

	function onResize() {
		renderer.setSize(e.clientWidth * 6.5, e.clientHeight * 6.5);
		renderer.domElement.style.position = 'absolute';
		renderer.domElement.style.top = '-115%';
		renderer.domElement.style.right = '0%';

		camera.aspect = e.clientWidth / e.clientHeight;
		camera.updateProjectionMatrix();
	}

	function reRender() {
		renderer.render(scene, camera);
		if (mixer) mixer.update(0.02);
	}

	onResize();

	e.appendChild(renderer.domElement);
	renderers.push({ renderer, scene, onResize, reRender });
});

function reRender() {
	requestAnimationFrame(reRender);
	renderers.forEach(function (renderer) {
		renderer.reRender();
	});
}
reRender();

window.addEventListener('resize', function () {
	renderers.forEach(function (renderer) {
		renderer.onResize();
	});
});
