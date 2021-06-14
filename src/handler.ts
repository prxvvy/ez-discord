import {commandHandler} from "./command-handler";
import {eventHandler} from "./event-handler";
import type {Client} from "./client/Client";

const handler = (commandsPath: string, eventsPath: string, client: Client) => {
    commandHandler(commandsPath, client);
    eventHandler(eventsPath, client);
}

export { handler };