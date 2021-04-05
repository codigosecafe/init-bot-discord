import Events from 'events'
import BotServer from "./src/botServer.js";
import DiscordController from './src/discordController.js';
import DiscordService from './src/discordService.js';

const port = process.env.PORT || 3000;
const eventEmitter = new Events();

const discordService = new DiscordService(eventEmitter);
const discordController = new DiscordController(eventEmitter);
const botServer = new BotServer({ port, eventEmitter });

await botServer.initialize();

discordService.initialize();
discordController.initialize().heardMessagem();




