"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var logger_1 = __importDefault(require("./logger/logger"));
var config_1 = __importDefault(require("./config"));
var mongoose_1 = __importDefault(require("mongoose"));
var index_1 = __importDefault(require("./routes/index"));
var loggerMiddleWare_1 = __importDefault(require("./logger/loggerMiddleWare"));
var port = config_1.default.port;
var app = express_1.default();
// Front-end
app.use(express_1.default.static('client'));
// Activity Logger
app.use(loggerMiddleWare_1.default);
app.use(express_1.default.json());
// Real route
app.use('/product', index_1.default.product);
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express_1.default.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
mongoose_1.default.connect(config_1.default.monggoUri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
});
mongoose_1.default.connection
    .once('open', function () {
    logger_1.default.info('Database is connected');
})
    .on('error', function (error) {
    logger_1.default.error('Connection error:', error);
});
mongoose_1.default.Promise = global.Promise;
// start the Express server
app.listen(port, function () {
    logger_1.default.info("server started at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map