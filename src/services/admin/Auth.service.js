import AuthModel from "../../models/admin/Auth.model.js";

import jwt from "jsonwebtoken";

class AuthService {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;

    this.AuthModel = new AuthModel(this.Server).table;
  }

  generateToken() {
    return jwt.sign({ admin: true }, this.Server.env.SECRET_KEY, {
      expiresIn: this.Server.env.TOKEN_EXPIRED,
    });
  }

  async loggin(data) {
    const getDataAuthModel = await this.AuthModel.findOne({
      where: {
        username: data.username,
        password: data.password,
      },
    });

    // console.log(getDataAuthModel);

    if (getDataAuthModel === null) return -1;

    return this.generateToken();
  }
}

export default AuthService;
