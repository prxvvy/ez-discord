"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./src/client/Client");
const Command_1 = require("./src/client/Command");
const Event_1 = require("./src/client/Event");
__exportStar(require("./src/client/Client"), exports);
__exportStar(require("./src/client/Command"), exports);
__exportStar(require("./src/client/Event"), exports);
exports.default = {
    client: Client_1.Client,
    command: Command_1.Command,
    event: Event_1.Event
};
