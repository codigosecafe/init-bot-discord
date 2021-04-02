import { Client, MessageAttachment } from 'discord.js';
import { constants } from './constants.js';


export default class DiscordController{

    constructor(){
        this.client = new Client();
    }
    initialize(eventEmitter){
        this.client.on('ready', () => {
            console.log(`${this.client.user.tag} logado com sucesso`);
        });
        this.client.login(constants.app.TOKEN_APP_DISCORD);
        return this;
    }

    heardPing(){
        
        this.client.on('message', msg => {
            if(msg.content == 'ping'){
                msg.reply('pong');
            }
        });

        return this;
    }
}