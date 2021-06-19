declare module "ez-discord" {

    import Eris from "eris";

    export type perms = {
        [key: string]: string;
    };

    export const permissions: perms;

    export class Client extends Eris.Client implements ClientProps {
        commandsPath: string;
        eventsPath: string;
        commands: Command[];
        events: Event[];
        constructor(clientOptions: ClientOptions);
        private loadAll;
        get_command_by_name(command_name: string): Command;
        get_command_by_aliases(command_alias: string): Command;
    }

    export class Command implements CommandProps {
        client: Client;
        name: string;
        description: string;
        autoAliases?: boolean;
        aliases?: string[];
        format?: string;
        details?: string;
        examples?: string;
        ownerOnly?: boolean;
        clientPermissions?: string[];
        userPermissions?: string[];
        nsfw?: boolean;
        hidden?: boolean;
        isDisabled?: boolean | false;
        suppGuildOnly?: boolean;
        guildOwnerOnly?: boolean;
        constructor(client: Client, commandOptions: CommandOptions);
        exec(message: Eris.Message, args?: string[], ...params: any): any;
    }

    export class Event implements EventProps {
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

    export interface EventOptions {
        name: string;
        isDisabled?: boolean | false;
    }

    export interface CommandOptions {
        name: string;
        description: string;
        autoAliases?: boolean;
        aliases?: string[];
        format?: string;
        details?: string;
        examples?: string;
        ownerOnly?: boolean;
        clientPermissions?: string[];
        userPermissions?: string[];
        nsfw?: boolean;
        hidden?: boolean;
        isDisabled?: boolean | false;
        suppGuildOnly?: boolean;
        guildOwnerOnly?: boolean;
    }

    interface CommandProps {
        client: Client;
        name: string;
        description: string;
        autoAliases?: boolean;
        aliases?: string[];
        format?: string;
        details?: string;
        examples?: string;
        ownerOnly?: boolean;
        clientPermissions?: string[];
        userPermissions?: string[];
        nsfw?: boolean;
        hidden?: boolean;
        isDisabled?: boolean | false;
        suppGuildOnly?: boolean;
        guildOwnerOnly?: boolean;
        exec(message: Eris.Message, args?: string[], ...params: any): any;
    }

    export interface ClientOptions {
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
        get_command_by_name(command_name: string): Command;
        get_command_by_aliases(command_alias: string): Command;
    }

}