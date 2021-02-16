// const EventEmitter = require('events');
const EventEmitter = require('./events');
const later = require('later');

later.date.localTime();

class Programador extends EventEmitter{
    constructor(config){
        super();

        this.config = config;

        this.initSchedule();
    }
    
    initSchedule(){
        this.config.forEach(conf => 
            later.setInterval(
                () => {
                    console.log(`Emitiendo => HORA: ${conf.hora} - TEMP: ${conf.temperatura}º`);
                    this.emit('ideal', conf.temperatura);
                }, 
                later.parse.text('at ' + conf.hora)
            )         
        );
    }
}

exports = module.exports = Programador;