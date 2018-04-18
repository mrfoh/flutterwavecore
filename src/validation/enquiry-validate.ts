import joi from "joi";
import { CardEnquiryValidateOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validatCardEnquiryPayload(data: CardEnquiryValidateOptions) {
    const schema: JoiSchema<CardEnquiryValidateOptions> = {
        trxreference: joi
            .string()
            .required(),
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

export default validatCardEnquiryPayload;