import { DataTypes } from "sequelize";

class AuthModel {
  constructor(server) {
    const table = server.model.db.define(
      "admin",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },

        password: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        tableName: "admin",
        timestamps: false,
      }
    );

    this.table = table;
  }
}

export default AuthModel;
