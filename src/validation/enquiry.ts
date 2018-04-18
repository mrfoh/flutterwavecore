import joi from "joi";
import { CardEnquiryOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateEnquiryPayload(data: CardEnquiryOptions) {
    const schema: JoiSchema<CardEnquiryOptions> = {
        cardno: joi
        .string()
        .required()
        .min(10),
        cvv: joi
            .string()
            .required()
            .min(3),
        expirymonth: joi
            .number()
            .required()
            .max(12)
            .min(1)
            .raw(),
        expiryyear: joi
            .number()
            .required()
            .greater(2009),
        trxreference: joi
            .string()
            .required(),
        pin: joi
            .string()
            .required()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateEnquiryPayload;