"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const validate_params_1 = require("../utils/validate-params"); // Call the function to validate commands params are going gucci. In case you are not working with typescript.
/**
 * @description Represent a command.
 * @implements {CommandProps}
 */
class Command {
    constructor(client, commandOptions) {
        validate_params_1.validateCommand(client, commandOptions);
        this.client = client;
        this.name = commandOptions.name;
        this.description = commandOptions.description;
        this.autoAliases = commandOptions.autoAliases;
        this.aliases = commandOptions.aliases;
        if (commandOptions.autoAliases) {
            if (this.name.includes('-'))
                this.aliases.push(this.name.replace(/-/g, ''));
            for (const alias of this.aliases) {
                if (alias.includes('-'))
                    this.aliases.push(alias.replace(/-/g, ''));
            }
        }
        this.format = commandOptions.format;
        this.details = commandOptions.details;
        this.examples = commandOptions.examples;
        this.ownerOnly = commandOptions.ownerOnly;
        this.clientPermissions = commandOptions.clientPermissions;
        this.userPermissions = commandOptions.userPermissions;
        this.nsfw = commandOptions.nsfw;
        this.isDisabled = commandOptions.isDisabled || false;
        this.hidden = commandOptions.hidden;
        this.suppGuildOnly = commandOptions.suppGuildOnly;
        this.guildOwnerOnly = commandOptions.guildOwnerOnly;
    }
    // @ts-ignore
    exec(message, args, ...params) {
        throw new Error(`Command ${this.constructor.name} is missing the exec method.`);
    }
}
exports.Command = Command;
