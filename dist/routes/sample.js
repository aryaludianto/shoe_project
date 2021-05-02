"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sample_1 = __importDefault(require("../models/sample"));
const router = express_1.default.Router();
// get all samples
router.get('/', (req, res, next) => {
    sample_1.default.find({}).then((sample) => {
        res.send(sample);
    });
});
exports.default = router;
//# sourceMappingURL=sample.js.map