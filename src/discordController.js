import { constants } from './constants.js';


export default class DiscordController{

    constructor(eventEmitter){
        this.eventEmitter = eventEmitter;
    }
    initialize(){
        this.eventEmitter.emit('discord:connect');
        return this;
    }

    heardMessagem(){

        this.eventEmitter.emit('discord:message', (msg, reply) => {
            if(reply != '')
                msg.reply(reply);
        });

        return this;
    }

}