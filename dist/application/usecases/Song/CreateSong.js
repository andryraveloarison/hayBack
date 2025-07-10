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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSong = void 0;
class CreateSong {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }
    execute(song) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSong = yield this.songRepository.create(song);
            return Object.assign({ success: true }, newSong);
        });
    }
}
exports.CreateSong = CreateSong;
