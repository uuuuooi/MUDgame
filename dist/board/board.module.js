"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const board_repository_1 = require("./adapters/driven/board.repository");
const boards_controller_1 = require("./adapters/driving/boards.controller");
const boards_service_1 = require("./domain/boards.service");
const board_entity_1 = require("./adapters/model/board.entity");
const IBoardRepository_1 = require("./domain/outboundPorts/IBoardRepository");
const IBoardService_1 = require("./domain/inboundPorts/IBoardService");
let BoardsModule = class BoardsModule {
};
BoardsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([board_entity_1.Board]), auth_module_1.AuthModule],
        controllers: [boards_controller_1.BoardsController],
        providers: [
            {
                provide: IBoardService_1.IBoardService,
                useClass: boards_service_1.BoardsService,
            },
            {
                provide: IBoardRepository_1.IBoardRepository,
                useClass: board_repository_1.BoardRepository,
            },
        ],
    })
], BoardsModule);
exports.BoardsModule = BoardsModule;
//# sourceMappingURL=board.module.js.map