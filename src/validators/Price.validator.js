class PriceValidator {
  PriceCheck = {
    type: "object",
    properties: {
      lebar: {
        type: "number",
        maximum: 1000,
        minimum: 1,
        nullable: false,
      },
      panjang: {
        type: "number",
        maximum: 1000,
        minimum: 1,
        nullable: false,
      },
      tinggi: {
        type: "number",
        maximum: 1000,
        minimum: 1,
        nullable: false,
      },
      bahan: {
        type: "string",
        maxLength: 100,
        minLength: 1,
        nullable: false,
      },
    },
    required: ["panjang", "lebar", "tinggi", "bahan"],
    additionalProperties: false,
  };
}

export default PriceValidator;
