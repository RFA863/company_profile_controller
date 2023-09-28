class ApplicantsValidator {
  SubmitApplicants = {
    type: "object",
    properties: {
      name: {
        type: "string",
        maxLength: 50,
        minLength: 1,
        nullable: false,
      },

      phone: {
        type: "string",
        maxLength: 15,
        minLength: 1,
        nullable: false,
      },
      email: {
        type: "string",
        maxLength: 25,
        minLength: 1,
        nullable: false,
      },
      cv_path: {
        type: "string",
        minLength: 1,
        nullable: false,
      },
      gender: {
        type: "boolean",
        nullable: false,
      },
      experience: {
        type: "string",
        maxLength: 50,
        minLength: 1,
        nullable: false,
      },
      tools_knowledge: {
        type: "string",
        maxLength: 50,
        minLength: 1,
        nullable: false,
      },
      specialist: {
        type: "string",
        maxLength: 100,
        minLength: 1,
        nullable: false,
      },
    },
    required: [
      "name",
      "phone",
      "email",
      "cv_path",
      "gender",
      "experience",
      "tools_knowledge",
      "specialist",
    ],
    additionalProperties: false,
  };
}

export default ApplicantsValidator;
