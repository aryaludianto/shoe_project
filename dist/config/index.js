"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var process_1 = __importDefault(require("process"));
dotenv_1.default.config();
var port = process_1.default.env.NODE_ENV === 'development'
    ? process_1.default.env.SERVER_PORT
    : process_1.default.env.PORT;
exports.default = {
    appName: process_1.default.env.APP_NAME,
    port: port,
    monggoUri: process_1.default.env.MONGGO_DB_URI,
};
//# sourceMappingURL=index.js.map