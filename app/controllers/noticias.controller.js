import { BaseController } from "../core/base.controller.js";
import NoticiasRepository from "../repository/noticias.respository.js";

export default class Noticias extends BaseController {
  constructor() {
    super();
  }

  async getNoticias(req, res) {
    try {
      let response = await NoticiasRepository.getNoticias();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getNoticiasById(req, res) {
    try {
      const id = req.params.id;
      let response = await NoticiasRepository.getNoticiasById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }

  async postNoticias(req, res) {
    try {
      const body = req.body;
      let response = await NoticiasRepository.postNoticias(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putNoticiasById(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      let response = await NoticiasRepository.putNoticiasById(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteNoticiasById(req, res) {
    try {
      const id = req.params.id;
      let response = await NoticiasRepository.deleteNoticiasById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
