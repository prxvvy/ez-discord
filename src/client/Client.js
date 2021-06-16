"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const eris_1 = __importDefault(require("eris"));
const handler_1 = require("../handler");
const validate_params_1 = require("../utils/validate-params");
class Client extends eris_1.default.Client {
    constructor(clientOptions) {
        validate_params_1.validateClient(clientOptions);
        super(clientOptions.token, clientOptions.clientOptions);
        this.commandsPath = clientOptions.commandsPath;
        this.eventsPath = clientOptions.eventsPath;
        this.commands = [];
        this.events = [];
        this.connect()
            .then(() => {
            console.log("Client connected.");
        })
            .catch(e => console.error(e));
        this.loadAll();
    }
    loadAll() {
        handler_1.handler(this.commandsPath, this.eventsPath, this);
        console.log(`Loaded a total of ${this.commands.length} ${this.commands.length > 1 || !this.commands.length ? "commands" : "command"}.`);
        console.log(`Loaded a total of ${this.events.length} ${this.events.length > 1 || !this.events.length ? "events" : "event"}.`);
    }
    ;
}
exports.Client = Client;
