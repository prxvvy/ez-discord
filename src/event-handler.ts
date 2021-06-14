import type {Client} from "./client/Client";
import {Dirent, readdirSync} from "fs";
import type {Event} from "./client/Event";

const fileTypes: RegExp = /\.(js|ts)$/i;

const eventHandler = (eventPath: string, client: Client): any => {
    const files: Dirent[] = readdirSync(eventPath, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) return eventHandler(`${eventPath}/${file.name}`, client);
        if (!fileTypes.test(file.name)) return;
        try {
            const event: Event = new (require(`${eventPath}/${file.name}`).default)(client) || new (require(`${eventPath}/${file.name}`))(client);
            if (!event) return;
            client.on(event.name, event.exec.bind(event));
            client.events.push(event);
        } catch (e) {
            console.error(e);
        }
    }
};

export { eventHandler };