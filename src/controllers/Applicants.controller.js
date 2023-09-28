import ApplicantsService from "../services/Applicants.service.js";
import ApplicantsValidator from "../validators/Applicants.validator.js";

import Ajv from "ajv";

class ApplicantsController {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.Ajv = new Ajv();
    this.ApplicantsService = new ApplicantsService(this.Server);
    this.ApplicantsValidator = new ApplicantsValidator();
  }

  async submit(req, res) {
    const data = req.body;
    const schemeValidate = this.Ajv.compile(
      this.ApplicantsValidator.SubmitApplicants
    );

    if (!schemeValidate(req.body))
      return res.status(400).json({
        status: 400,
        message: schemeValidate.errors[0].message,
        type: "validator",
        data: schemeValidate.errors[0],
      });

    const submitSrv = await this.ApplicantsService.submit(data);

    if (submitSrv === -1)
      return res.status(403).json({
        status: 403,
        message: "forbiden, phone number already exist",
        data: { code: -1 },
      });
    if (submitSrv === -2)
      return res.status(400).json({
        status: 400,
        message: "forbiden, file did not exist",
        data: { code: -2 },
      });
    if (submitSrv === -3)
      return res.status(403).json({
        status: 403,
        message: "forbiden, file size is to biger",
        data: { code: -3 },
      });
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  }
}

export default ApplicantsController;
