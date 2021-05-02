"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
function loggerMiddleware(request, response, next) {
    logger_1.default.info(request.method + " " + request.path);
    next();
}
exports.default = loggerMiddleware;
//# sourceMappingURL=loggerMiddleWare.js.map