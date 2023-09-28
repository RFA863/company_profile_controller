class PriceValidator {
  PriceCheck = {
    type: "object",
    properties: {
      panjang: {
        type: "number",
        maximum: 1000,
        minimum: 1,
        nullable: false,
      },
      lebar: {
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
        maximum: 1000,
        minimum: 1,
        nullable: false,
      },
    },
    required: ["panjang", "lebar", "tinggi", "bahan"],
    additionalProperties: false,
  };
}

export default PriceValidator;
