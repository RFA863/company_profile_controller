import ApplicantsController from "../controllers/Applicants.controller.js";

class ApplicantsRoute {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.routePrefix = "/applicants";

    this.ApplicantsController = new ApplicantsController(this.Server);
    this.routes();
  }

  routes() {
    this.API.get(this.routePrefix, (req, res) => {
      res.send("test");
    });

    this.API.post(this.routePrefix + "/submit", (req, res) =>
      this.ApplicantsController.submit(req, res)
    );
  }
}

export default ApplicantsRoute;
