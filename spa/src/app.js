import Phaser from 'phaser';
import GameScene from './scenes/game';

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x3AA655,
    scene: [GameScene],
}

let game = new Phaser.Game(config);
