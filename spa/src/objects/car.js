import BaseObject from './base';
import Phaser from 'phaser';

let px = [0, 128, 256, 384, 512, 640, 768, 896, 1024, 1024 - 32, 1024 - 32, 1024 - 32];
let py = [320 + 32, 320 + 32, 320 + 32, 256 + 32, 256 + 32, 256 + 32, 256 + 32, 192 + 32, 128 + 32, 64, 0];

class Car extends BaseObject {
    constructor (config) {
        super(config);
        this.v = 0;
    }
    update (delta) {
        if (this.v > 1) { return; }
        let catmull = Phaser.Math.Interpolation.CatmullRom;
        this.v += delta * 0.0001; 
        let newX = catmull(px, this.v);
        let newY = catmull(py, this.v);
        this.rotation = Math.atan2(newY - this.y, newX - this.x);
        
        this.x = newX;
        this.y = newY;
    }
}

export default Car;

