import { BaseController } from "../core/base.controller.js";
import CargoRepository from "../repository/cargo.repository.js";

export default class Cargo extends BaseController {
  constructor() {
    super();
  }
  async getCargo(req, res) {
    try {
      const response = await CargoRepository.getCargo();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getCargoById(req, res) {
    try {
      const id = req.params.id;
      const response = await CargoRepository.getCargoById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async postCargo(req, res) {
    try {
      const body = req.body;
      const response = await CargoRepository.postCargo(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putCargo(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await CargoRepository.putCargo(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteCargo(req, res) {
    try {
      const id = req.params.id;
      const response = await CargoRepository.deleteCargo(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
