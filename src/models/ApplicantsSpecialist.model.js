// Library
import { DataTypes } from "sequelize";

class ApplicantsSpecialistModel {
  constructor(server) {
    const table = server.model.db.define(
      "applicants_specialist",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            // <--- is this redundant to associate
            model: "applicants",
            key: "id",
          },
        },
        specialist: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        tableName: "applicants_specialist",
        timestamps: false,
      }
    );

    this.table = table;
  }
}

export default ApplicantsSpecialistModel;
