import PriceService from "../services/Price.service.js";
import PriceValidator from "../validators/Price.validator.js";

import Ajv from "ajv";

class PriceController {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.Ajv = new Ajv();
    this.PriceService = new PriceService(this.Server);
    this.PriceValidator = new PriceValidator(this.Server);
  }

  async check(req, res) {
    const data = req.body;

    const priceValidate = this.Ajv.compile(this.PriceValidator.PriceCheck);

    if (!priceValidate(req.body))
      return res.status(400).json({
        status: 400,
        message: priceValidate.errors[0].message,
        type: "validator",
        data: priceValidate.errors[0],
      });

    const checkSrv = await this.PriceService.check(data);

    res.status(200).json({
      status: 200,
      message: "succes",
      data: checkSrv,
    });
  }
}

export default PriceController;
