import joi from "joi";
import { CardCaptureOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateGenericPayload(data: CardCaptureOptions) {
    const schema: JoiSchema<CardCaptureOptions> = {
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
        trxreference: joi
            .strict()
            .required(),
        trxauthorizeid: joi
            .strict()
            .required()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateGenericPayload;