import Eris = require("eris");
import type {Command} from "./Command";
import type {Event} from "./Event";
import {handler} from "../handler";

class Client extends Eris.Client {

    public commandsPath: string;
    public eventsPath: string;
    public commands: Command[];
    public events: Event[];

    constructor(clientOptions: ClientOptions) {
        super(clientOptions.token, clientOptions.clientOptions);
        this.commandsPath = clientOptions.commandsPath;
        this.eventsPath = clientOptions.eventsPath;
        this.commands = [];
        this.events = [];
        this.connect()
            .then(() => {
                console.log("Client connected.");
            })
            .catch((e) => console.error(e));
        this.loadAll();
    };

    private loadAll() {
        handler(this.commandsPath, this.eventsPath, this);
        console.log(`Loaded a total of ${this.commands.length} ${this.commands.length > 1 || !this.commands.length ? "commands" : "command"}.`);
        console.log(`Loaded a total of ${this.events.length} ${this.events.length > 1 || !this.events.length ? "events" : "event"}.`);
    };
}

interface ClientOptions {
    token: string;
    commandsPath: string;
    eventsPath: string;
    clientOptions?: Eris.ClientOptions;
}

export { Client };