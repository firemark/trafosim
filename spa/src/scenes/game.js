import Car from '../objects/car';

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    preload () {
        let loadImage = (key, path) => this.load.image(key, `assets/${path}`);
        loadImage('car1', 'cars/car1.png');
    }

    create () {
        this.add.text(20, 20, 'firemarek', {font: "12pt Arial", color: 'white'});
        this.addCars();
        //this.setMap();
    }

    addCars () {
        this.cars = this.add.group();
        let car = new Car({
            scene: this,
            key: 'car1',
            x: 128,
            y: 128,
        });

        this.cars.add(car);
    }

    setMap () {
        this.map = this.make.tilemap({key: 'map'});
        this.tileset = this.map.addTilesetImage('road', 'road');
    }

    update (time, delta) {
        this.cars.children.entries.forEach(
            (car) => car.update(delta)
        );
    }
}

GameScene.available = true;

export default GameScene;
