"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fs_1 = require("fs");
const fileTypes = /\.(js|ts)$/i;
const commandHandler = (path, client) => {
    const files = fs_1.readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory())
            return commandHandler(`${path}/${file.name}`, client);
        if (!fileTypes.test(file.name))
            return;
        try {
            const cmd = new (require(`${path}/${file.name}`).default)(client) || new (require(`${path}/${file.name}`))(client);
            if (!cmd)
                return;
            client.commands.push(cmd);
        }
        catch (e) {
            console.error(e);
        }
    }
};
const eventHandler = (path, client) => {
    const files = fs_1.readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory())
            return eventHandler(`${path}/${file.name}`, client);
        if (!fileTypes.test(file.name))
            return;
        try {
            const event = new (require(`${path}/${file.name}`).default)(client) || new (require(`${path}/${file.name}`))(client);
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
const handler = (commandsPath, eventsPath, client) => {
    commandHandler(commandsPath, client);
    eventHandler(eventsPath, client);
};
exports.handler = handler;
