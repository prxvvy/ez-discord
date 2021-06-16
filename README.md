# Ez Discord

[![Version](https://img.shields.io/npm/v/ez-discord?color=red&logo=npm)](https://www.npmjs.com/package/ez-discord)
[![Downloads](https://img.shields.io/npm/dt/ez-discord?logo=npm)](https://www.npmjs.com/package/ez-discord)
[![Activity](https://img.shields.io/github/last-commit/prxvvy/ez-discord?color=blue)](https://github.com/prxvvy/ez-discord)
[![Github](https://img.shields.io/github/package-json/v/prxvvy/ez-discord?color=black&label=github&logo=github)](https://github.com/prxvvy/ez-discord)

A very easy-to-use and fully object-oriented command and event framework for [eris](https://github.com/abalabahaha/eris).

## Installation
```
npm install ez-discord
```
Instancing client class example
-------------------------------

```js
const ezDiscord = require("ez-discord");

new ezDiscord.Client({
    token: "Your bot token",
    commandsPath: "Your commands directory",
    eventsPath: "Your events directory"
});
```

Ping pong command example
-------------------------

```js
const ezDiscord = require("ez-discord");

class PingCommand extends ezDiscord.Command {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Meh",
            aliases: ["pung", "pong"]
        });
    };
    
    exec(message) {
        return message.channel.createMessage("Pong!");
    };
}

module.exports = PingCommand;
```

**Note** that you would gotta create the messageCreate event yourself in order to have commands working. This is so that anyone can customize commands according to its CommandOptions object.