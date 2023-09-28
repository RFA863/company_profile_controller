import sendLogs from "./helpers/Logger.helper.js";
import HandlerRoute from "./routes/Handler.route.js";
import HandlerModel from "./models/Handler.model.js";
import HandlerMiddleware from "./middlewares/Handler.middleware.js";

// Library

import "dotenv/config";
import FS from "fs-extra";
import Express from "express";

class Server {
  constructor() {
    this.env = process.env;
    this.FS = FS;
    this.sendLogs = sendLogs;

    this.init();
  }

  async init() {
    // Initiate Server Data
    const serverDataPath = "/server_data";
    const resourceFolder = "/src/resources";

    if (!this.FS.existsSync(process.cwd() + serverDataPath)) {
      this.sendLogs("Initiate Server Data...");
      this.FS.mkdirSync(process.cwd() + serverDataPath);
      this.FS.copySync(
        process.cwd() + resourceFolder,
        process.cwd() + serverDataPath
      );
    }
    this.model = new HandlerModel(this);
    const isModelConnected = await this.model.connect();
    if (isModelConnected === -1) return;
    this.run();
  }

  async run() {
    this.API = Express();
    new HandlerMiddleware(this);
    new HandlerRoute(this);
    this.API.listen(this.env.PORT, this.env.HOST, () =>
      this.sendLogs("server listening on port " + this.env.PORT)
    );
  }
}

new Server();
