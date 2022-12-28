"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const IBoardRepository_1 = require("./outboundPorts/IBoardRepository");
let BoardsService = class BoardsService {
    constructor(boardReposity) {
        this.boardReposity = boardReposity;
    }
    async getBoardById(id) {
        const result = await this.boardReposity.findBoardById(id);
        if (!result) {
            throw new common_1.NotFoundException(`Can't fine Board with id ${id}`);
        }
        return result;
    }
    async getAllBoards(user) {
        const result = await this.boardReposity.findAllBoardsByUserId(user);
        return result;
    }
    async createBoard(createBoardDto, user) {
        const result = await this.boardReposity.createBoard(createBoardDto, user);
        return result;
    }
    async deleteBoard(id, user) {
        const result = await this.boardReposity.deleteBoardById(id, user);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
    }
    async updateBoardStatus(id, status) {
        const result = await this.boardReposity.updateBoardStatus(id, status);
        console.log(result);
        return result;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(IBoardRepository_1.IBoardRepository)),
    __metadata("design:paramtypes", [Object])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map