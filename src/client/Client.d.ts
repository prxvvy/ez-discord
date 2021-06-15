import Eris from "eris";
import type { Command } from "./Command";
import type { Event } from "./Event";
declare class Client extends Eris.Client implements ClientProps {
    commandsPath: string;
    eventsPath: string;
    commands: Command[];
    events: Event[];
    constructor(clientOptions: ClientOptions);
    loadAll(): any;
}
interface ClientOptions {
    token: string;
    commandsPath: string;
    eventsPath: string;
    clientOptions?: Eris.ClientOptions;
}
interface ClientProps {
    commandsPath: string;
    eventsPath: string;
    commands: Command[];
    events: Event[];
    loadAll(): any;
}
export { Client };
