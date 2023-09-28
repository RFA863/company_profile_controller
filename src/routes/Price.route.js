import PriceController from "../controllers/Price.controller.js";

class PriceRoute {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
    this.routePrefix = "/price/check";
    this.PriceController = new PriceController(this.Server);

    this.routes();
  }

  routes() {
    this.API.post(this.routePrefix, (req, res) =>
      this.PriceController.check(req, res)
    );
  }
}
export default PriceRoute;
