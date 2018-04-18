import joi from "joi";
import { CardTokenizeOptions, JoiSchema, CardAuthModel } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateTokenizePayload(data: CardTokenizeOptions) {
    const schema: JoiSchema<CardTokenizeOptions> = {
        validateoption: joi
            .string()
            .required()
            .uppercase(),
        authmodel: joi
            .string()
            .default(CardAuthModel.NOAUTH),
        bvn: joi
            .string()
            .when('authmodel', {
                is: 'BVN',
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
            .greater(2009)
    };

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateTokenizePayload;