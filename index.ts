import {Client} from "./src/client/Client";
import {Command} from "./src/client/Command";
import {Event} from "./src/client/Event";
export * from "./src/client/Client";
export * from "./src/client/Command";
export * from "./src/client/Event";
export default {
    Command: Command,
    Event: Event,
    Client: Client
}