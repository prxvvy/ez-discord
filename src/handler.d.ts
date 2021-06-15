import type { Client } from "./client/Client";
declare const handler: (commandsPath: string, eventsPath: string, client: Client) => void;
export { handler };
