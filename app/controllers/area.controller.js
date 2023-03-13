import { BaseController } from "../core/base.controller.js";
import AreaRepository from "../repository/area.repository.js";

export default class Area extends BaseController {
  constructor() {
    super();
  }
  async getArea(req, res) {
    try {
      const response = await AreaRepository.getArea();
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async getAreaById(req, res) {
    try {
      const id = req.params.id;
      const response = await AreaRepository.getAreaById(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async postArea(req, res) {
    try {
      const body = req.body;
      const response = await AreaRepository.postArea(body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async putArea(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await AreaRepository.putArea(id, body);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
  async deleteArea(req, res) {
    try {
      const id = req.params.id;
      const response = await AreaRepository.deleteArea(id);
      return super.responseSuccess(req, res, response);
    } catch (error) {
      return super.responseError(req, res, error);
    }
  }
}
