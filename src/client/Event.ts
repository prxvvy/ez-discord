import type {Client} from "./Client";

class Event {

    public client: Client;
    public name: string;

    constructor(client: Client, eventOptions: EventOptions) {
        this.client = client;
        this.name = eventOptions.name;
    };

    // @ts-ignore

    public exec(...params: any) {
        throw new Error(`Event $${this.constructor.name} is missing the exec method.`);
    };

}

interface EventOptions {
    name: string;
}

export { Event };