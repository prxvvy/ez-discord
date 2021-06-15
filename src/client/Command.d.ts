import type { Client } from "./Client";
import type { Message } from "eris";
declare class Command implements CommandProps {
    client: Client;
    name: string;
    description: string;
    aliases?: string[];
    constructor(client: Client, commandsOptions: CommandOptions);
    exec(message: Message, args?: string[], ...params: any): any;
}
interface CommandOptions {
    name: string;
    description: string;
    aliases?: string[];
}
interface CommandProps {
    client: Client;
    name: string;
    description: string;
    aliases?: string[];
    exec(message: Message, args?: string[], ...params: any): any;
}
export { Command };
