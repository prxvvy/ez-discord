import type {Client} from "./client/Client";
import {readdirSync} from "fs";
import type {Dirent} from "fs";
import type {Command} from "./client/Command";

const fileTypes: RegExp = /\.(js|ts)$/i;

const commandHandler = (commandPath: string, client: Client): any => {
    const files: Dirent[] = readdirSync(commandPath, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) return commandHandler(`${commandPath}/${file.name}`, client);
        if (!fileTypes.test(file.name)) return;
        try {
            const cmd: Command = new (require(`${commandPath}/${file.name}`).default)(client) || new (require(`${commandPath}/${file.name}`))(client);
            if (!cmd) return;
            client.commands.push(cmd);
        } catch (e) {
            console.error(e);
        }
    }
};

export { commandHandler };