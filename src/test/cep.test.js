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
const CepService_1 = require("../services/CepService");
describe('CepService', () => {
    let cepService;
    beforeAll(() => {
        cepService = new CepService_1.CepService();
    });
    it('should return address information for a valid CEP', () => __awaiter(void 0, void 0, void 0, function* () {
        let cep = '47430000';
        const address = yield cepService.getAddressByCep(cep);
        expect(address).toBeDefined();
        expect(address.cep.replace("-", "")).toEqual(cep);
        expect(address.logradouro).toBeDefined();
        expect(address.bairro).toBeDefined();
        expect(address.localidade).toBeDefined();
        expect(address.uf).toBeDefined();
    }));
    it('should return an error true for an invalid CEP', () => __awaiter(void 0, void 0, void 0, function* () {
        const cep = '00000000';
        const error = { "erro": "true" };
        yield expect(cepService.getAddressByCep(cep)).resolves.toEqual(error);
    }));
    it('should throw an error for an invalid CEP', () => __awaiter(void 0, void 0, void 0, function* () {
        const cep = 'aaaaaaaa';
        yield expect(cepService.getAddressByCep(cep)).rejects.toThrowError();
    }));
});
