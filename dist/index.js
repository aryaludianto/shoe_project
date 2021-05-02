"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./logger/logger"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const loggerMiddleWare_1 = __importDefault(require("./logger/loggerMiddleWare"));
const port = config_1.default.port;
const app = express_1.default();
// Configure Express to use EJS
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// define a route handler for the default Admin home page
app.get('/', (req, res) => {
    // render the index template
    res.render('index');
});
// Activity Logger
app.use(loggerMiddleWare_1.default);
// Route Testing
app.use('/test', index_1.default.test);
mongoose_1.default.connect(config_1.default.monggoUri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
});
mongoose_1.default.connection
    .once('open', () => {
    logger_1.default.info('Database is connected');
})
    .on('error', (error) => {
    logger_1.default.error('Connection error:', error);
});
mongoose_1.default.Promise = global.Promise;
// start the Express server
app.listen(port, () => {
    logger_1.default.info(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map