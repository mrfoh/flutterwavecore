import { AnySchema } from "joi";

export interface FlutterwaveOptions {
    /**
     * Set the Flutterwave API URL to sandbox
     * 
     * @type {boolean}
     * @memberOf FlutterwaveOptions
     */
    sandbox: boolean;
    /**
     * Specify custom endpoint
     * 
     * @type {string}
     * @memberOf FlutterwaveOptions
     */
    endpoint: string;
}

export enum CardAuthModel {
    NOAUTH = "NOAUTH",
    BVB = "BVN",
    VBVSECURECODE = "VBVSECURECODE",
    RANDOM_DEBIT = "RANDOM_DEBIT"
}

export enum CardValidationOption {
    SMS = "SMS",
    VOICE = "VOICE"
}

export enum Currency {
    NAIRA = "NGN",
    DOLLAR = "USD",
    POUND = "GBP",
    EURO = "EURO",
    CEDI = "CEDI",
    KENYAN_SHILLING = "KES"
}

export enum Country {
    NIGERIA = "NG",
    GHANA = "GH",
    KENYA = "KE",
    USA = "US",
    UK = "UK"
}

export interface CardTokenizeOptions {
    validateoption: string;
    authmodel: CardAuthModel;
    bvn?: string;
    cardno: string;
    cvv: string;
    expirymonth: string;
    expiryyear: string;
}

export interface CardPreauthorizeOptions {
    amount: number;
    currency: Currency;
    country: Country;
    chargetoken: string;
}

export interface CardCaptureOptions {
    amount: number;
    currency: Currency;
    country: Country;
    trxreference: string;
    trxauthorizeid: string;
}

export interface CardRefundOptions extends CardCaptureOptions {}

export interface CardVoidOptions extends CardCaptureOptions {}

export interface CardValidateOptions {
    otp: string;
    otptransactionidentifier: string;
}

export interface CardTokenChargeOptions {
    amount: number;
    currency: Currency;
    custid?: string;
    narration?: string;
    chargetoken: string;
    cardtype?: string;
}

export interface CardChargeOptions {
    amount: number;
    authmodel: CardAuthModel;
    currency: Currency;
    country: Country;
    cardno: string;
    cvv: string;
    expirymonth: string;
    expiryyear: string;
    narration?: string;
    responseurl?: string;
    custid?: string;
    bvn?: string;
    pin?: string;
    cardtype?: string;
}

export interface CardEnquiryOptions {
    cardno: string;
    cvv: string;
    expirymonth: string;
    expiryyear: string;
    pin: string;
    trxreference: string;
}

export interface CardEnquiryValidateOptions{
    trxreference: string;
    otp: string;
    otptransactionidentifier: string;
}

export interface TransactionStatusOptions {
    trxreference: string;
}

export type JoiSchema<T> = { [P in NonNullable<keyof T>]: AnySchema };