"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const eris_1 = __importDefault(require("eris")); // Require Eris lib.
const handler_1 = require("../handler"); // Require the event and command handler.
const validate_params_1 = require("../utils/validate-params"); // Require the validator for client constructor param to ensure things are going gucci. See its info. This is in case you are not working with typescript.
/**
 * @description Look for a command by its name.
 * @typedef {Function} get_command_by_name
 * @param {string} command_name - The command name to look for.
 * @return {Command} The Command object if found.
 */
/**
 * @description Look for a command by its alias.
 * @typedef {Function} get_command_by_alias
 * @param {string} command_alias - The command alias to look for.
 * @return {Command} The Command object if found.
 */
/**
 * @description The Client class props.
 * @typedef {ClientProps} ClientProps
 * @property {string} commandsPath - The path where commands are located.
 * @property {string} eventsPath - The path where events are located.
 * @property {Command[]} commands - Represent an array of the Command class.
 * @property {Event[]} events -  Represent an array of the Event class.
 * @property {get_command_by_name} get_command_by_name - The function to get a specified command by its name.
 * @property {get_command_by_alias} get_command_by_alias - The function to get a specified command by its alias.
 */
/**
 * @description Options for the easy-discord Client.
 * @typedef {ClientOptions} ClientOptions
 * @property {string} token - The client token.
 * @property {string} commandsPath - The path where commands are located.
 * @property {string} eventsPath - The path where events are located.
 * @property {?Eris.ClientOptions} - The Eris.ClientOptions interface for client config.
 */
/**
 * @description The ez-discord Client itself.
 * @extends {Eris.Client}
 * @implements {ClientProps}
 */
class Client extends eris_1.default.Client {
    /**
     * @description Init ez-discord Client object.
     * @constructor
     * @param {ClientOptions} clientOptions - Options for the Client class.
     */
    constructor(clientOptions) {
        // Validate the arguments passed to the clientOptions config object.
        validate_params_1.validateClient(clientOptions);
        // Pass the client token to the Eris.Client constructor and its Client Options if needed.
        super(clientOptions.token, clientOptions.clientOptions);
        // Init commands.
        /**
         * @description The path where commands are located.
         * @type {string}
         */
        this.commandsPath = clientOptions.commandsPath;
        // Init events.
        /**
         * @description The path where events are located.
         * @type {string}
         */
        this.eventsPath = clientOptions.eventsPath;
        // Init Client commands as an empty array.
        /**
         * @description The array of client commands.
         * @type {Command[]}
         */
        this.commands = [];
        /**
         * @description The array of client events.
         * @type {Event[]}
         */
        this.events = [];
        // Init Eris.Client.
        this.connect()
            .then(() => {
            console.log('Client connected.'); // If everything went gucci. Wii.
        })
            .catch((e) => console.error(e)); // No omg.
        // Init all commands and events.
        this.loadAll();
    }
    /**
     * @description Load and initialize all events and commands.
     * @private
     * @return {void}
     */
    loadAll() {
        // Call the handler func which is the one that inits all the commands and events.
        handler_1.handler(this.commandsPath, this.eventsPath, this);
        // Give info msg if commands were successfully loaded.
        console.log(`Loaded a total of ${this.commands.length} ${this.commands.length > 1 || !this.commands.length
            ? 'commands'
            : 'command'}.`);
        // Give info msg if events were successfully loaded.
        console.log(`Loaded a total of ${this.events.length} ${this.events.length > 1 || !this.events.length
            ? 'events'
            : 'event'}.`);
    }
    /**
     * @description Get a specified command by its name.
     * @public
     * @param {string} command_name - The command name to look for.
     * @return {Command} - The command object if found.
     */
    get_command_by_name(command_name) {
        // Did this part of the function in case you are not working with typescript. Just to ensure a param is been passed and it's a correct type.
        if (!command_name)
            throw new Error('A command name must be specified.'); // If haven't passed a param for this function.
        if (typeof command_name !== 'string')
            throw new TypeError('Command name must be a string.'); // If have passed a param but it's ain't no a string.
        return this.commands.find((command) => command.name.toLocaleLowerCase() === command_name); // Return the specified command.
    }
    /**
     * @description Get a specified command by its alias.
     * @public
     * @param {string} command_alias - The command alias to look for.
     * @return {Command} - The command object if found.
     */
    get_command_by_aliases(command_alias) {
        // Did this part of the function in case you are not working with typescript. Just to ensure a param is been passed and it's a correct type.
        if (!command_alias)
            throw new Error('A command alias must be specified.'); // If haven't passed a param for this function.
        if (typeof command_alias !== 'string')
            throw new TypeError('Command alias must be a string.'); // If have passed a param but it's ain't no a string.
        return this.commands.find((command) => { var _a; return (_a = command.aliases) === null || _a === void 0 ? void 0 : _a.includes(command_alias); }); // Return the specified command.
    }
}
exports.Client = Client;
