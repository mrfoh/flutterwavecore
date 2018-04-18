import joi from "joi";
import { CardPreauthorizeOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validatePreauthorizePayload(data: CardPreauthorizeOptions) {
    const schema: JoiSchema<CardPreauthorizeOptions> = {
        amount: joi
            .number().
            required(),
        currency: joi
            .string()
            .required()
            .uppercase(),
        country: joi
            .string()
            .required()
            .uppercase(),
        chargetoken: joi
            .strict()
            .required()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validatePreauthorizePayload;