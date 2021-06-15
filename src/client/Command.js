"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(client, commandsOptions) {
        this.client = client;
        this.name = commandsOptions.name;
        this.description = commandsOptions.description;
        this.aliases = commandsOptions.aliases;
    }
    ;
    // @ts-ignore
    exec(message, args, ...params) {
        throw new Error(`Command ${this.constructor.name} is missing the exec method.`);
    }
    ;
}
exports.Command = Command;
