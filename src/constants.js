import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({path: path.resolve(__dirname, '../.env') });

export const constants = {
    app:{
        APP_NAME: process.env.APP_NAME,
        TOKEN_APP_DISCORD: process.env.TOKEN_APP_DISCORD,
    },
    events:{}
} 