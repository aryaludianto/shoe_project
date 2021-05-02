"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sample_1 = __importDefault(require("../models/sample"));
var router = express_1.default.Router();
// get all samples
router.get('/', function (req, res, next) {
    sample_1.default.find({}).then(function (sample) {
        res.send(sample);
    });
});
exports.default = router;
//# sourceMappingURL=sample.js.map