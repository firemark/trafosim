import Phaser from 'phaser';
import GameScene from './scenes/game';

let config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 700,
    backgroundColor: 0x3AA655,
    scene: [GameScene],
}

let game = new Phaser.Game(config);
