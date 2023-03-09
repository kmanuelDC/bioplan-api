import { BaseController } from '../core/base.controller.js';
import ColaboradoresRepository from '../repository/colaboradores.respository.js';


export default class Colaboradores extends BaseController {
    constructor() { super(); }

    async getColaboradores(req, res) {
        try {
            let response = await ColaboradoresRepository.getColaboradores()
            return super.responseSuccess(req, res, response)
        } catch (error) {
            return super.responseError(req, res, error)

        }
    }

    async postColaborador(req, res) {
        try {
            let body = req.body;
            //console.log(body)
            let response = await ColaboradoresRepository.postColaborador(body)
            return super.responseSuccess(req, res, response)
        } catch (error) {
            return super.responseError(req, res, error)

        }
    }

    

}