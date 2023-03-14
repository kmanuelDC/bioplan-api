import { BaseController } from "../core/base.controller.js";
import ConvocatoriasRepository from "../repository/convocatorias.repository.js";

export default class Convocatorias extends BaseController {
  constructor() {
    super();
  }
  async getConvocatorias(req, res) {
    try {
      const response = await ConvocatoriasRepository.getConvocatorias();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getConvocatoriasById(req, res) {
    try {
      const id = req.params.id;
      const response = await ConvocatoriasRepository.getConvocatoriasById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async postConvocatorias(req, res) {
    try {
      const body = req.body;
      const response = await ConvocatoriasRepository.postConvocatorias(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putConvocatorias(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await ConvocatoriasRepository.putConvocatorias(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteConvocatorias(req, res) {
    try {
      const id = req.params.id;
      const response = await ConvocatoriasRepository.deleteConvocatorias(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
