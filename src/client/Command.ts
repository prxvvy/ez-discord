import type {Client} from "./Client";
import type {Message} from "eris";

class Command {

    public client: Client;
    public name: string;
    public description: string;
    public aliases?: string[]

    constructor(client: Client, commandOptions: CommandOptions) {
        this.client = client;
        this.name = commandOptions.name;
        this.description = commandOptions.description;
        this.aliases = commandOptions.aliases;
    };

    // @ts-ignore

    public exec(message: Message, args: string[], ...params: any) {
        throw new Error(`Command ${this.constructor.name} is missing the exec method.`);
    };

}

interface CommandOptions {
    name: string;
    description: string;
    aliases?: string[]
}

export { Command };