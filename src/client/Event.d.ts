import type { Client } from "./Client";
declare class Event implements EventProps {
    client: Client;
    name: string;
    isDisabled?: boolean | false;
    constructor(client: Client, eventOptions: EventOptions);
    exec(...params: any): any;
}
interface EventProps {
    client: Client;
    name: string;
    isDisabled?: boolean | false;
    exec(...params: any): any;
}
interface EventOptions {
    name: string;
    isDisabled?: boolean | false;
}
export { Event };
