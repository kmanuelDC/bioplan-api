import { BaseController } from "../core/base.controller.js";
import ProyectosRepository from "../repository/proyectos.repository.js";

export default class Proyectos extends BaseController {
  constructor() {
    super();
  }

  async getProyectos(req, res) {
    try {
      const response = await ProyectosRepository.getProyectos();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getProyectosById(req, res) {
    try {
      const id = req.params.id;
      const response = await ProyectosRepository.getProyectosById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }

  async postProyectos(req, res) {
    try {
      const body = req.body;
      const response = await ProyectosRepository.postProyectos(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }

  async putProyectos(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await ProyectosRepository.putProyectos(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteProyectos(req, res) {
    try {
      const id = req.params.id;
      const response = await ProyectosRepository.deleteProyectos(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
