import BaseObject from './base';

class Car extends BaseObject {
    update (delta) {
        this.x += delta * 0.1; 
    }
}

export default Car;

