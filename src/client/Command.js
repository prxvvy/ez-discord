"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const validate_params_1 = require("../utils/validate-params");
class Command {
    constructor(client, commandsOptions) {
        validate_params_1.validateCommand(client, commandsOptions);
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
