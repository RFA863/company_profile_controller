import ApplicantsService from "../../services/admin/Applicants.service.js";

class ApplicantsController {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.ApplicantsService = new ApplicantsService(this.Server);
  }

  async getAll(req, res) {
    if (req.middlewares.authorization.admin === false)
      return res.status(403).json({
        messagge: "Forbidden",
      });

    const getAllSrv = await this.ApplicantsService.getAll(
      req.headers["authorization"]
    );

    res.status(200).json({
      status: 200,
      message: "Ok",
      data: getAllSrv,
    });
  }

  async getCv(req, res) {
    if (!req.query.token)
      return res.status(401).json({
        status: 401,
        message: "Token Unauthorized",
        type: "token",
        data: { code: -1 },
      });

    const getCvSrv = await this.ApplicantsService.getCv(req.params.userId);
    if (getCvSrv === -1)
      return await res.status(404).json({
        status: 404,
        message: "Not Found, File Not Exists",
        type: "service",
        data: { code: -1 },
      });

    res.setHeader("Content-Type", getCvSrv.mime);
    res.setHeader(
      "Content-Disposition",
      "inline; filename=" + "CV-" + req.params.userId + ".pdf"
    );

    res.status(200).send(getCvSrv.file);
  }
}

export default ApplicantsController;
