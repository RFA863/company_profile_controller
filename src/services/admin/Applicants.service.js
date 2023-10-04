import ApplicantsModel from "../../models/Applicants.model.js";
import ApplicantsSpecialistModel from "../../models/ApplicantsSpecialist.model.js";

import { fileTypeFromBuffer } from "file-type";

class ApplicantsService {
  constructor(Server) {
    this.Server = Server;
    this.ApplicantsModel = new ApplicantsModel(this.Server).table;
    this.ApplicantsSpecialistModel = new ApplicantsSpecialistModel(
      this.Server
    ).table;
  }
  async getAll(token) {
    const getDataApplicantsModel = await this.ApplicantsModel.findAll();

    if (getDataApplicantsModel === null && getDataApplicantsSpecialistModel)
      return -1;

    for (let i in getDataApplicantsModel) {
      const getDataApplicantsSpecialistModel =
        await this.ApplicantsSpecialistModel.findAll({
          where: {
            userId: getDataApplicantsModel[i].dataValues.id,
          },
        });
      getDataApplicantsModel[i].dataValues.cv_path =
        this.Server.env.HOSTNAME +
        "/admin/applicants/cv/" +
        getDataApplicantsModel[i].dataValues.id +
        "?token=" +
        token;
      getDataApplicantsModel[i].dataValues.specialist =
        getDataApplicantsSpecialistModel.map(
          (val) => val.dataValues.specialist
        );
    }
    return getDataApplicantsModel;
  }

  async getCv(userId) {
    const getDataCv = await this.ApplicantsModel.findOne({
      where: {
        id: userId,
      },
    });

    if (getDataCv === null) return -1;

    const cvFile = this.Server.FS.readFileSync(
      process.cwd() + getDataCv.dataValues.cv_path
    );

    const { mime } = await fileTypeFromBuffer(cvFile);

    return {
      file: cvFile,
      mime,
    };
  }
}

export default ApplicantsService;
