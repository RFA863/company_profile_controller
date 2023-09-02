import ApplicantsRoute from "./Applicants.route.js";

class HandlerRoute {
  constructor(Server) {
    new ApplicantsRoute(Server);
  }
}

export default HandlerRoute;
