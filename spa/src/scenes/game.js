import Car from '../objects/car';

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    preload () {
        let loadImage = (key, path) => this.load.image(key, `assets/${path}`);
        loadImage('car1', 'cars/car1.png');

        loadImage('tileset-road', 'tilesets/road.png');
        loadImage('tileset-lines', 'tilesets/lines.png');
        loadImage('tileset-onroad', 'tilesets/onroad.png');

        this.load.json('map', 'assets/map.json');
    }

    create () {
        this.add.text(20, 20, 'firemarek', {font: "12pt Arial", color: 'white'});
        this.setMap();
        this.addCars();
    }

    addCars () {
        this.cars = this.add.group();
        let car = new Car({
            scene: this,
            key: 'car1',
            x: 0,
            y: 64 * 8 + 32,
        });

        this.cars.add(car);
    }

    setMap () {
        var layers = this.cache.json.entries.entries.map;
        this.map = this.make.tilemap({
            key: 'map',
            tileWidth: 64,
            tileHeight: 64,
            width: 32,
            height: 14,
            data: layers[0],
        });

        this.map.layers = layers.map(
            (layer, i) => {
                let map = Phaser.Tilemaps.Parsers.Parse2DArray('foo', layer, 64, 64)
                let newLayer = map.layers[0];
                newLayer.name = `layer-${i}`; 
                return newLayer;
            }
        );

        let roadTileset = this.map.addTilesetImage('road', 'tileset-road', 64, 64, 0, 0, 1);
        let linesTileset = this.map.addTilesetImage('lines', 'tileset-lines', 64, 64, 0, 0, 1);
        let onRoadTileset = this.map.addTilesetImage('onroad', 'tileset-onroad', 64, 64, 0, 0, 1);

        this.map.createStaticLayer(0, roadTileset, 0, 0);
        this.map.createStaticLayer(2, onRoadTileset, 0, 0);
        this.map.createStaticLayer(1, linesTileset, 0, 0);
    }

    update (time, delta) {
        this.cars.children.entries.forEach(
            (car) => car.update(delta)
        );
    }
}

GameScene.available = true;

export default GameScene;
