"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var SampleSchema = new Schema({
    city: {
        type: String,
    },
    zip: {
        type: String,
    },
    loc: {
        type: Object,
    },
    pop: {
        type: Number,
    },
    state: {
        type: String,
    },
});
exports.default = mongoose_1.default.model('zips', SampleSchema);
//# sourceMappingURL=sample.js.map