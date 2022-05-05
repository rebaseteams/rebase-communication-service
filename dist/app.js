"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = __importDefault(require("fs"));
const doc = js_yaml_1.default.load(fs_1.default.readFileSync('./src/swagger/api.yaml', 'utf8'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(doc));
app.get('/livecheck', (req, res) => {
    res.send("OK");
});
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map