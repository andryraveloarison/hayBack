"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelRepositoryImpl = void 0;
const LevelSchema_1 = __importDefault(require("../models/LevelSchema"));
class LevelRepositoryImpl {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const levels = yield LevelSchema_1.default.find().sort({ createdAt: -1 });
            ;
            return levels.map(level => level.toObject());
        });
    }
    create(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = yield LevelSchema_1.default.create(level);
            return created.toObject();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LevelSchema_1.default.findOne({ _id: id }).lean();
        });
    }
    update(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LevelSchema_1.default.findByIdAndUpdate(id, userData, { new: true }).lean();
        });
    }
}
exports.LevelRepositoryImpl = LevelRepositoryImpl;
