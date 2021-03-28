"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Homepage');
});
let port = process.env.port || 3000;
let server = app.listen(port, () => console.log(`Listening on Port ${server.address().port}`));
//# sourceMappingURL=index.js.map