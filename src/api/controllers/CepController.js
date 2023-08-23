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
exports.CepController = void 0;
const cepService_1 = require("../../services/cepService");
class CepController {
    constructor() {
        this.getCep = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cep = req.params.cep;
                const address = yield this.cepService.getAddressByCep(cep);
                res.status(200).json(address);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao obter o endereço.' });
            }
        });
        this.cepService = new cepService_1.CepService();
    }
}
exports.CepController = CepController;
