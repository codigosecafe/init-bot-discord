import { Client, MessageAttachment } from 'discord.js';
import { constants } from './constants.js';


export default class DiscordService{

    constructor(eventEmitter){
        this.client = new Client();
        this.eventEmitter = eventEmitter;
    }
    initialize(){

        this.eventEmitter.on('discord:connect', () => {
            this.client.on('ready', () => {
                console.log(`${this.client.user.tag} logado com sucesso`);
            });
            this.client.login(constants.app.TOKEN_APP_DISCORD);    
        });

        this.eventEmitter.on('discord:message', (callback) => {
            this.client.on('message', msg => {
                const reply =  this.processMessage(msg.content);
                return callback(msg, reply);
            });  
        });

        return this;
    }

    processMessage(message){
        return (message == 'ping')? 'pong' : '';
    }

    
}