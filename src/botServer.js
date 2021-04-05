import http from 'http';

export default class BotServer {
    constructor({ port , eventEmitter}) {
        this.port = port
        this.eventEmitter = eventEmitter
    }

    async initialize() {
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('bot booted, now just trust the developer!!')
        });

        this.eventEmitter.on('servidor:inicializado', (server, callback) => {
            const result = `bot server is running at ${server.address().port}`;
            return callback(result);
        });

        return new Promise((resolve, reject) => {
            server.on('error', reject);
            server.listen(this.port, () => resolve(server));
            this.eventEmitter.emit('servidor:inicializado', server, (result) => {
                console.log(result);
            });
        });

    }
}