import Events from 'events'
import BotServer from "./src/botServer.js";
import DiscordController from './src/discordController.js';


const port = process.env.PORT || 3000;
const discordController = new DiscordController();
const eventEmitter = new Events();
const botServer = new BotServer({ port });

const server = await botServer.initialize(eventEmitter);
discordController.initialize(eventEmitter).heardPing();


console.log('bot server is running at', server.address().port);