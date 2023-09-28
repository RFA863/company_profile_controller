class AuthValidator {
  loggin = {
    type: "object",
    properties: {
      username: {
        type: "string",
        maxLength: 100,
        minLength: 1,
        nullable: false,
      },
      password: {
        type: "string",
        maxLength: 50,
        minLength: 1,
        nullable: false,
      },
    },
    required: ["username", "password"],
    additionalProperties: false,
  };
}

export default AuthValidator;
