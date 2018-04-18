import joi from "joi";
import { TransactionStatusOptions, JoiSchema } from "../types";
import { SCHEMA_OPTIONS } from "../constants";

function validateTransasctionStatusPayload(data: TransactionStatusOptions) {
    const schema: JoiSchema<TransactionStatusOptions> = {
        trxreference: joi
            .string()
            .required()
    }

    const { error, value } = joi.validate(data, schema, SCHEMA_OPTIONS);

    if (error) throw error;

    return value;
}

export default validateTransasctionStatusPayload;