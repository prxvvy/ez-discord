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
    get_command_by_name(command_name) {
        return this.commands.find((command) => command.name.toLocaleLowerCase() === command_name);
    }
    get_command_by_aliases(command_alias) {
        return this.commands.find((command) => { var _a; return (_a = command.aliases) === null || _a === void 0 ? void 0 : _a.includes(command_alias); });
    }
}
exports.Client = Client;
