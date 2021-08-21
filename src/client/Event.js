"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const validate_params_1 = require("../utils/validate-params");
class Event {
    constructor(client, eventOptions) {
        validate_params_1.validateEvent(client, eventOptions);
        this.client = client;
        this.name = eventOptions.name;
        this.isDisabled = eventOptions.isDisabled;
    }
    //@ts-ignore
    exec(...params) {
        throw new Error(`Event ${this.constructor.name} is missing the exec method.`);
    }
}
exports.Event = Event;
