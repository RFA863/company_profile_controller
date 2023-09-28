import AuthService from "../../services/admin/Auth.service.js";
import AuthValidator from "../../validators/admin/Applicants.validator.js";

import Ajv from "ajv";

class AuthController {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.Ajv = new Ajv();
    this.AuthService = new AuthService(this.Server);
    this.AuthValidator = new AuthValidator();
  }

  async loggin(req, res) {
    const data = req.body;
    const logginValidate = this.Ajv.compile(this.AuthValidator.loggin);

    if (!logginValidate(req.body))
      return res.status(400).json({
        status: 400,
        message: logginValidate.errors[0].message,
        type: "validator",
        data: logginValidate.errors[0],
      });

    const logginSrv = await this.AuthService.loggin(data);

    if (logginSrv === -1)
      return res.status(404).json({
        status: 404,
        message: "Not Found, username and email not found",
        data: { code: -1 },
      });
    res.status(200).json({
      status: 200,
      message: "Ok",
      data: logginSrv,
    });
  }
}

export default AuthController;
