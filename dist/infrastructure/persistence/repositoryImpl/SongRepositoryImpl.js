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
exports.SongRepositoryImpl = void 0;
const SongSchema_1 = __importDefault(require("../models/SongSchema"));
class SongRepositoryImpl {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const songs = yield SongSchema_1.default.find().sort({ createdAt: -1 });
            ;
            return songs.map(song => song.toObject());
        });
    }
    create(song) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = yield SongSchema_1.default.create(song);
            return created.toObject();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SongSchema_1.default.findOne({ _id: id }).lean();
        });
    }
    update(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SongSchema_1.default.findByIdAndUpdate(id, userData, { new: true }).lean();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield SongSchema_1.default.findByIdAndDelete(id);
            return !!result;
        });
    }
}
exports.SongRepositoryImpl = SongRepositoryImpl;
