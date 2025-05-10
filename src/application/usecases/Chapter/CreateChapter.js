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
exports.CreateChapter = void 0;
class CreateChapter {
    constructor(chapterRepository) {
        this.chapterRepository = chapterRepository;
    }
    execute(chapterData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Tu peux ajouter des validations ici
            if (!chapterData.title || !chapterData.subject) {
                throw new Error("Le titre et le sujet sont obligatoires");
            }
            return yield this.chapterRepository.create(chapterData);
        });
    }
}
exports.CreateChapter = CreateChapter;
