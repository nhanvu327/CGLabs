/* global THREE, scene, renderer, camera */



/* Define the create cube function
 * - create a material object (type MeshBasicMaterial)
 * - set the color for the material object (r, g, b)
 * - set the wireframe for the material object to true
 * - create the cube geometry box object (w, h, d)
 * - create a cube object from the geometry and material
 * - the function returns a cube object
 */
function createCube(w, h, d, r, g, b) {
    // code goes here
   var material = new THREE.MeshBasicMaterial();
   material.color = new THREE.Color(r,g,b);
   material.wireframe = true;
   var geometry = new THREE.BoxGeometry(w,h,d);
   var cube = new THREE.Mesh(geometry,material);
   return cube;
}

/* Define the create sphere function
 * - create a material object (type MeshBasicMaterial)
 * - set the color for the material object (r, g, b)
 * - set the wireframe for the material object to true
 * - create the sphere geometry object (radius, hlines, vlines)
 * - create a sphere object from the geometry and material
 * - the function returns a sphere object
 */
function createSphere(radius, hlines, vlines, r, g, b) {
    // code goes here
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(r,g,b);
    material.wireframe = true;
    var geometry = new THREE.SphereGeometry(radius,hlines,vlines);
    var sphere = new THREE.Mesh(geometry,material);
    return sphere;
}

/*
 * Create a cube
 * Create a sphere
 * Ensure that the cube is embedded inside the sphere
 */
var cube = createCube(2,2,2,1,0,1);
var sphere = createSphere(4,32,32,1,0,0);

/* Define the add shapes function
 * - add the cube object to the scene
 * - add the sphere object to the scene
 */
function addShapes() {
    // code goes here
   scene.add(cube);
   scene.add(sphere);
}