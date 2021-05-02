"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
function loggerMiddleware(request, response, next) {
    logger_1.default.info(`${request.method} ${request.path}`);
    next();
}
exports.default = loggerMiddleware;
//# sourceMappingURL=loggerMiddleWare.js.map