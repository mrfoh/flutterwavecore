import joi from "joi";
import { CardTokenChargeOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateCardTokenChargePayload(data: CardTokenChargeOptions) {
    const schema: JoiSchema<CardTokenChargeOptions> = {
        amount: joi
            .number().
            required(),
        currency: joi
            .string()
            .required()
            .uppercase(),
        chargetoken: joi
            .strict()
            .required(),
        narration: joi
            .string(),
        custid: joi
            .string(),
        cardtype: joi
            .string()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateCardTokenChargePayload;