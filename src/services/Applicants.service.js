import ApplicantsModel from "../models/Applicants.model.js";
import ApplicantsSpecialistModel from "../models/ApplicantsSpecialist.model.js";

import { fileTypeFromBuffer } from "file-type";

class ApplicantsService {
  constructor(Server) {
    this.Server = Server;
    this.ApplicantsModel = new ApplicantsModel(this.Server).table;
    this.ApplicantsSpecialistModel = new ApplicantsSpecialistModel(
      this.Server
    ).table;
  }

  async submit(data) {
    // console.log(data)
    const getDataApplicantsModel = await this.ApplicantsModel.findOne({
      where: {
        phone: data.phone,
      },
    });

    if (getDataApplicantsModel !== null) return -1;

    const file = Buffer.from(data.cv_path, "base64");
    const fileType = await fileTypeFromBuffer(file);
    // console.log(fileType)

    if (!fileType) return -2;

    if (!fileType.ext === "pdf") return -3;

    if (file.byteLength / 1048576 > 8) return -3;

    const addDataApplicantsModel = await this.ApplicantsModel.create({
      name: data.name,
      phone: data.phone,
      email: data.email,
      cv_path: "/server_data/applicants/CV/" + data.phone + "." + fileType.ext,
      gender: data.gender,
      experience: data.experience,
      tools_knowledge: data.tools_knowledge,
    });

    const applicantId = addDataApplicantsModel.id;

    const addDataApplicantsSpesialistModel =
      await this.ApplicantsSpecialistModel.create({
        userId: applicantId,
        specialist: data.specialist,
      });

    this.Server.FS.writeFileSync(
      process.cwd() +
        "/server_data/applicants/CV/" +
        data.phone +
        "." +
        fileType.ext,
      file
    );

    return;
  }
}

export default ApplicantsService;
