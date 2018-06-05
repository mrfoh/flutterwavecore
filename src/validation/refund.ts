import joi from "joi";
import { JoiSchema, CardChargeRefundOptions } from '../types';
import { SCHEMA_OPTIONS } from "../constants";

function validateChargeRefundPayload(data: CardChargeRefundOptions) {
    const schema: JoiSchema<CardChargeRefundOptions> = {
        refundamount: joi
            .number().
            required(),
        paymentreference: joi
            .string()
            .required(),
        merchantid: joi
            .string()
            .optional()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateChargeRefundPayload;