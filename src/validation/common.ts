import joi from "joi";
import { JoiSchema } from "../types";

export interface FlutterwaveBaseRequestOptions {
    merchantid: string;
}

export const baseSchema: JoiSchema<FlutterwaveBaseRequestOptions> = {
    merchantid: joi
        .string().
        required()
}