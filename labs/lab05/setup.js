/* global THREE */
//Declare System Variables

var scene;
var camera;
var renderer;
var controls;
var ambientLight;
var cameraLight;

/* Define the setup screen function
 * Setup the 3 main components: scene, camera, renderer
 * - setup the scene ratio to entire window
 * - create a perspective camera
 * - create a WebGl renderer
 * - append the renderer to the HTML document body
 * - add controls to the scene
 */
function setScene() {
    scene = new THREE.Scene();
    var ratio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
    camera.position.set(50, 10, 15);
    camera.lookAt(0, 0, 5);
    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

/* Define the set light function
 * - create a PointLight with 1 intensity
 * - add the point  light to the camera as camera light
 * - create AmbientLight with 0.2 intensity
 */
function setLight() {
    cameraLight = new THREE.PointLight(new THREE.Color(0xffffff), 0.8);
    camera.add(cameraLight);
    ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 0.3);
}

/* Define the resize screen function
 * - setup the scene width and height to the entire window
 * - setup the renderer size to the width and height
 * - set the camera ratio to width / height
 * - update the camera projection matrix
 * - render the view (scene, camera)
 */
var resizeScene = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};