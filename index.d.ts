declare module "ez-discord" {

    import Eris from "eris";

    export class Client extends Eris.Client implements ClientProps {
        commandsPath: string;
        eventsPath: string;
        commands: Command[];
        events: Event[];
        constructor(clientOptions: ClientOptions);
        loadAll(): any;
    }

    export class Command implements CommandProps {
        client: Client;
        name: string;
        description: string;
        aliases?: string[];
        constructor(client: Client, commandsOptions: CommandOptions);
        exec(message: Eris.Message, args?: string[], ...params: any): any;
    }

    export class Event implements EventProps {
        client: Client;
        name: string;
        isDisabled?: boolean | false;
        constructor(client: Client, eventOptions: EventOptions);
        exec(...params: any): any;
    }

    const handler: (commandsPath: string, eventsPath: string, client: Client) => void;

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
        exec(message: Eris.Message, args?: string[], ...params: any): any;
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

}