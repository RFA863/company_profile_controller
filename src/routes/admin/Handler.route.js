import AuthRoute from "./Auth.route.js";
import ApplicantsRoute from "./Applicants.route.js";
class HandlerRoute {
  constructor(Server) {
    new AuthRoute(Server);
    new ApplicantsRoute(Server);
  }
}

export default HandlerRoute;
