"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
exports.default = winston_1.default.createLogger({
    levels: winston_1.default.config.npm.levels,
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.printf(function (info) {
        var log = info.timestamp + " " + info.level + "\t: " + info.message;
        return info.stack ? log + "\n" + info.stack : log;
    })),
    transports: [new winston_1.default.transports.Console()],
});
//# sourceMappingURL=logger.js.map