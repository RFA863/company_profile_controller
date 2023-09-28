import PriceRoute from "./Price.route.js";
import ApplicantsRoute from "./Applicants.route.js";
import HandlerRouteAdmin from "./admin/Handler.route.js";

class HandlerRoute {
  constructor(Server) {
    new PriceRoute(Server);
    new ApplicantsRoute(Server);
    new HandlerRouteAdmin(Server);
  }
}

export default HandlerRoute;
