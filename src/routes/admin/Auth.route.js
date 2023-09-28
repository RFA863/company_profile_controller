import AuthController from "../../controllers/admin/Auth.controller.js";

class AuthRoute {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.routePrefix = "/admin/auth";

    this.AuthController = new AuthController(this.Server);
    this.route();
  }

  route() {
    this.API.post(this.routePrefix, (req, res) =>
      this.AuthController.loggin(req, res)
    );
  }
}

export default AuthRoute;
