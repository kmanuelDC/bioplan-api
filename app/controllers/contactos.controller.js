import { BaseController } from "../core/base.controller.js";
import ContactosRepository from "../repository/contactos.respository.js";

export default class Contactos extends BaseController {
  constructor() {
    super();
  }

  async getContactos(req, res) {
    try {
      let response = await ContactosRepository.getContactos();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getContactoById(req, res) {
    try {
      const id = req.params.id;
      let response = await ContactosRepository.getContactoById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }

  async postContacto(req, res) {
    try {
      const body = req.body;
      let response = await ContactosRepository.postContacto(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putContactoById(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      let response = await CoontactosRepository.putContactoById(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteContactoById(req, res) {
    try {
      const id = req.params.id;
      let response = await ContactosRepository.deleteContactoById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
