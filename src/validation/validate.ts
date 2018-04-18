import joi from "joi";
import { CardValidateOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validatePayload(data: CardValidateOptions) {
    const schema: JoiSchema<CardValidateOptions> = {
        otp: joi
            .string().
            required(),
        otptransactionidentifier: joi
            .string()
            .required()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validatePayload;