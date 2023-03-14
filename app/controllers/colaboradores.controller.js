import { BaseController } from "../core/base.controller.js";
import ColaboradoresRepository from "../repository/colaboradores.respository.js";

export default class Colaboradores extends BaseController {
  constructor() {
    super();
  }

  async getColaboradores(req, res) {
    try {
      let response = await ColaboradoresRepository.getColaboradores();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getColaboradoById(req, res) {
    try {
      const id = req.params.id;
      let response = await ColaboradoresRepository.getColaboradoById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }

  async postColaborador(req, res) {
    try {
      const body = req.body;
      let response = await ColaboradoresRepository.postColaborador(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putColaboradorById(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      let response = await ColaboradoresRepository.putColaboradorById(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteColaboradorById(req, res) {
    try {
      const id = req.params.id;
      let response = await ColaboradoresRepository.deleteColaboradorById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}

