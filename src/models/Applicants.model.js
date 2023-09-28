// Library
import { DataTypes } from "sequelize";

class ApplicantsModel {
  constructor(server) {
    const table = server.model.db.define(
      "applicants",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },

        phone: {
          type: DataTypes.STRING(15),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(25),
          allowNull: false,
        },
        cv_path: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        gender: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        experience: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        tools_knowledge: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        tableName: "applicants",
        timestamps: false,
      }
    );

    this.table = table;
  }
}

export default ApplicantsModel;
