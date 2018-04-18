import joi from "joi";
import { JoiSchema, CardChargeOptions, CardAuthModel } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateCardChargePayload(data: CardChargeOptions) {
    const schema: JoiSchema<CardChargeOptions> = {
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
        narration: joi
            .string(),
        custid: joi
            .string(),
        authmodel: joi
            .string()
            .default(CardAuthModel.NOAUTH),
        bvn: joi
            .string()
            .when('authmodel', {
                is: 'BVN',
                then: joi.required()
            }),
        pin: joi
            .string()
            .when('authmodel', {
                is: 'PIN',
                then: joi.required()
            }),
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
        cardtype: joi
            .string(),
        responseurl: joi
            .string()
            .when('authmodel', {
                is: 'VBVSECURECODE',
                then: joi.required()
            }),
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateCardChargePayload;