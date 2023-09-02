class ApplicantsController {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
  }

  async submit(req, res) {
    res.send("kiw kiw");
  }
}

export default ApplicantsController;
