import * as THREE from 'three';

const scene = new THREE.Scene();

let canvas = document.getElementById('gameScreen');
var ctx = canvas.getContext('2d');
ctx.fillRect(20,20,100,100);