import ApplicantsController from "../../controllers/admin/Applicants.controller.js";
import AuthorizationMiddleware from "../../middlewares/Authorization.middlewares.js";

class ApplicantsRoute {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.routePrefix = "/admin/applicants";
    this.AuthorizationMiddleware = new AuthorizationMiddleware(this.Server);
    this.ApplicantsController = new ApplicantsController(this.Server);
    this.routes();
  }

  routes() {
    this.API.get(
      this.routePrefix,
      this.AuthorizationMiddleware.check(),
      (req, res) => this.ApplicantsController.getAll(req, res)
    );

    this.API.get(
      this.routePrefix + "/cv/:userId",
      this.AuthorizationMiddleware.check(),
      (req, res) => this.ApplicantsController.getCv(req, res)
    );
  }
}

export default ApplicantsRoute;
