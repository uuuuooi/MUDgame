"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = Number(process.env.SERVERPORT);
    await app.listen(port);
    logger.log(`Application running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map