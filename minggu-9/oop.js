
class Mobil {
    
    constructor(type, color) {
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }

    engineStart () {

        this.engineStatus = 'on'
        console.log('engine start, mobilnya warna'+this.color+" typenya: "+this.type+" status "+this.engineStatus)

    }

    engingetStop () {
        
        this.engineStatus = 'off'
        console.log('engine start, mobilnya warna'+this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }

    static inEngineOn (mobil) {
        if (mobil.engineStatus === 'on') {
            console.log('Engine On')
        } else {
            console.log('Engine off')
        }
    }
}

const m = new Mobil('Phanter', 'Hitam');

// m.engingetStop();

Mobil.inEngineOn(m);

//WITHOUT SET & GET
class Car2 {
    constructor() {
        this._color = null
    }

    get color () {
        return `Wrana Mobilnya adalah ${this._color}`
    }

    set color (color) {
        this._color = `${color}keren`
    }
}

const car2 = new Car2()

car2.color = 'merah'

console.log(car2.color)