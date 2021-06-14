# Ez Discord
---
A module that'll make things way easier when creating a Discord bot with the Eris library.

### Instancing Client Class
---
```js
// index.js
const ezDiscord = require("ez-discord"); // can also do const {Client} = require("ez-discord");

new ezDiscord.Client({
    toke: "", // Your bot token.
    commandsPath: "./commands", // Your commands folder path.
    eventsPath: "./events" // Your events folder path.
});
// That's it
```

### Creating an event
---
```js
//ready.js (ready event).
const ezDiscord = require("ez-discord");

class ReadyEvent extends ezDiscord.Event {
    constructor(client) {
        super(client, {
            name: "ready",
        });
    };
}

module.exports = ReadyEvent;
```
### exec method
---
```js
//ready.js (ready event).
const ezDiscord = require("ez-discord");

class ReadyEvent extends ezDiscord.Event {
    constructor(client) {
        super(client, {
            name: "ready",
        });
    };
    exec() {
        console.log(`Connected as ${this.client.user.username}#${this.client.user.discriminator}!`);
    };
}

module.exports = ReadyEvent;
```

### Creating a command
---
```js
// ping.js
const ezDiscord = require("ez-discord");

class Ping extends ezDiscord.Command {
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

module.exports = Ping;
```
---
# Command Class
---
| Member | Type |
| ---------- | ---------- |
| name   | string   |
| aliases? | string[]    |
| description | string    |


---

# Event Object
---
| Member | Type |
| ---------- | ---------- |
| name   | string   |

---


Note that you'd gotta create the messageCreate event so that commands can work, this is so that can anyone can customize this.


Need Help? Issue report? Don't understand it?

[Head to the github repo](https://github.com/prxvvy/ez-discord)