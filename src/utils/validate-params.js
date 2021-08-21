"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCommand = exports.validateEvent = exports.validateClient = void 0;
const permissions_1 = __importDefault(require("./permissions")); // Import all Discord permissions.
/**
 * @description Validate clientOptions config object if all props are goin' gucci. Mainly for Client class.
 * @param {ClientOptions} clientOptions - The clientOptions config object to check.
 * @return {void} Because
 */
const validateClient = (clientOptions) => {
    if (typeof clientOptions !== 'object')
        throw new TypeError('Client options must be an object.');
    if (!clientOptions.token)
        throw new Error('A token must be specified.');
    if (typeof clientOptions.token !== 'string')
        throw new TypeError('Token must be a string.');
    if (!clientOptions.commandsPath)
        throw new Error('A commands directory must be specified.');
    if (typeof clientOptions.commandsPath !== 'string')
        throw new TypeError('Commands directory must be a string.');
    if (!clientOptions.eventsPath)
        throw new Error('A events directory must be specified.');
    if (typeof clientOptions.eventsPath !== 'string')
        throw new TypeError('Events directory must be a string.');
};
exports.validateClient = validateClient;
/**
 * @description Validate if a client and eventOptions config object param is passed and plus check if its props. Mainly for Event class.
 * @param {Client} client - The ez-discord Client class.
 * @param {EventOptions} eventOptions - The eventOptions config object to check.
 * @return {void}
 */
const validateEvent = (client, eventOptions) => {
    if (!client)
        throw new Error('A client must be specified.');
    if (typeof eventOptions !== 'object')
        throw new TypeError('Event options must be an object.');
    if (!eventOptions.name)
        throw new Error('Event name must be specified.');
    if (typeof eventOptions.name !== 'string')
        throw new TypeError('Event name must be a string');
    if (eventOptions.name &&
        eventOptions.name !== eventOptions.name.toLocaleLowerCase())
        throw new Error('Event name must be lowercase.');
    if ('isDisabled' in eventOptions &&
        typeof eventOptions.isDisabled !== 'boolean')
        throw new TypeError('isDisabled option must be a boolean.');
};
exports.validateEvent = validateEvent;
/**
 * @description Validate if a client and commandOptions config object param is passed and plus check if its props. Mainly for Command class.
 * @param {Client} client - The ez-discord Client class.
 * @param {CommandOptions} commandsOptions - The commandOptions config object to check.
 * @return {void}
 */
const validateCommand = (client, commandsOptions) => {
    if (!client)
        throw new Error('A client must be specified.');
    if (typeof commandsOptions !== 'object')
        throw new TypeError('Command options must be an object.');
    if (!commandsOptions.name)
        throw new Error('Command name must be specified.');
    if (typeof commandsOptions.name !== 'string')
        throw new TypeError('Command name must be a string.');
    if (commandsOptions.name &&
        commandsOptions.name !== commandsOptions.name.toLocaleLowerCase())
        throw new Error('Command name must be lowercase.');
    if (!commandsOptions.description)
        throw new Error('Command description must be specified.');
    if (typeof commandsOptions.description !== 'string')
        throw new TypeError('Command description must be a string.');
    if (commandsOptions.description &&
        commandsOptions.description !==
            commandsOptions.description.toLocaleLowerCase())
        throw new Error('Command description must be lowercase.');
    if (commandsOptions.aliases &&
        (!Array.isArray(commandsOptions.aliases) ||
            commandsOptions.aliases.some((alias) => typeof alias !== 'string')))
        throw new TypeError('Command aliases must be an array of strings.');
    if (commandsOptions.aliases &&
        commandsOptions.aliases.some((alias) => alias !== alias.toLocaleLowerCase()))
        throw new Error('Command aliases must be lowercase.');
    if ('format' in commandsOptions &&
        typeof commandsOptions.format !== 'string')
        throw new TypeError('Command format must be a string.');
    if ('details' in commandsOptions &&
        typeof commandsOptions.details !== 'string')
        throw new TypeError('Command details must be a string.');
    if (commandsOptions.examples &&
        (!Array.isArray(commandsOptions.examples) ||
            commandsOptions.examples.some((example) => typeof example !== 'string')))
        throw new TypeError('Command examples must be an array of strings.');
    if (commandsOptions.clientPermissions) {
        if (!Array.isArray(commandsOptions.clientPermissions))
            throw new TypeError('Command clientPermissions must be an array of permission key strings.');
        for (const perm of commandsOptions.clientPermissions) {
            if (!permissions_1.default[perm])
                throw new RangeError(`Invalid command clientPermission: ${perm}`);
        }
    }
    if (commandsOptions.userPermissions) {
        if (!Array.isArray(commandsOptions.userPermissions))
            throw new TypeError('Command userPermissions must be an array of permission key strings.');
        for (const perm of commandsOptions.userPermissions) {
            if (!permissions_1.default[perm])
                throw new RangeError(`Invalid command userPermission: ${perm}`);
        }
    }
};
exports.validateCommand = validateCommand;
