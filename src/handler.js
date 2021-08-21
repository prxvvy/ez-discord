"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fs_1 = require("fs"); // Require readdirSync to read dirs.
/**
 * @description A regex. Wow cool.
 * @type {RegExp}
 */
const fileTypes = /\.(js|ts)$/i;
/**
 * @description Get all the files in a dir instancing or inheriting the Command class and add it to an array of commands.
 * @param {string} path - The dir where commands are located.
 * @param {Client} client - The ez-discord Client class to add commands to.
 * @return {any} Idk
 */
const commandHandler = (path, client) => {
    const files = fs_1.readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory())
            return commandHandler(`${path}/${file.name}`, client);
        if (!fileTypes.test(file.name))
            return;
        try {
            const cmd = new (require(`${path}/${file.name}`).default)(client) ||
                new (require(`${path}/${file.name}`))(client);
            if (!cmd)
                return;
            if (cmd.isDisabled)
                return;
            client.commands.push(cmd);
        }
        catch (e) {
            console.error(e);
        }
    }
};
/**
 * @description Get all the files in a dir instancing or inheriting the Event class and add it to an array of events.
 * @param {string} path - The dir where events are located.
 * @param {Client} client - The ez-discord Client class to add events to.
 * @return {any} Idk
 */
const eventHandler = (path, client) => {
    const files = fs_1.readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory())
            return eventHandler(`${path}/${file.name}`, client);
        if (!fileTypes.test(file.name))
            return;
        try {
            const event = new (require(`${path}/${file.name}`).default)(client) ||
                new (require(`${path}/${file.name}`))(client);
            if (!event)
                return;
            if (event.isDisabled)
                return;
            client.on(event.name, event.exec.bind(event));
            client.events.push(event);
        }
        catch (e) {
            console.error(e);
        }
    }
};
/**
 * @description The main handler.
 * @param {string} commandsPath - The dir where commands are located.
 * @param {string} eventsPath - The dir where events are located.
 * @param {Client} client - The ez-discord Client class to add events and commands to.
 * @return {void}
 */
const handler = (commandsPath, eventsPath, client) => {
    commandHandler(commandsPath, client);
    eventHandler(eventsPath, client);
};
exports.handler = handler;
