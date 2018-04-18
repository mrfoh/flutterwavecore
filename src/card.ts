import FlutterwaveBase from "./base";

import {
    CARD_TOKENIZE_URL,
    CARD_CAPTURE_URL,
    CARD_REFUND_URL,
    CARD_PREAUTHORIZE_URL,
    CARD_VOID_URL,
    CARD_VALIDATE_URL,
    CARD_CHARGE_URL,
    CARD_ENQUIRY_URL,
    CARD_VALIDATE_ENQUIRY_URL,
    CARD_TRANSACTION_STATUS_URL
} from "./constants";

import { 
    CardTokenizeOptions,
    CardPreauthorizeOptions,
    CardCaptureOptions,
    CardRefundOptions,
    CardVoidOptions,
    CardValidateOptions,
    CardTokenChargeOptions,
    CardChargeOptions,
    CardEnquiryOptions,
    CardEnquiryValidateOptions,
    TransactionStatusOptions
} from "./types";

import validateTokenizePayload from "./validation/tokenize";
import validatePreauthorizePayload from "./validation/preauthorize";
import validateGenericPayload from "./validation/generic";
import validatePayload from "./validation/validate";
import validateCardTokenChargePayload from "./validation/charge-token";
import validateCardChargePayload from "./validation/charge";
import validateEnquiryPayload from "./validation/enquiry";
import validateCardEnquiryPayload from "./validation/enquiry-validate";
import validateTransasctionStatusPayload from "./validation/transaction-status";

export default class FlutterwaveCard {
    private fwBase: FlutterwaveBase;
    private tokenizeEndpoint: string;
    private preauthorizeEndpoint: string;
    private captureEndpoint: string;
    private refundEndpoint: string;
    private voidEndpoint: string;
    private validateEndpoint: string;
    private chargeEndpoint: string;
    private enquiryEndpoint: string;
    private validateEnquiryEndpoint: string;
    private transactionStatusEndpoint: string;

    constructor(fwBase: FlutterwaveBase) {
        this.fwBase = fwBase;
        this.tokenizeEndpoint = this.fwBase.buildEndpoint(CARD_TOKENIZE_URL);
        this.preauthorizeEndpoint = this.fwBase.buildEndpoint(CARD_PREAUTHORIZE_URL);
        this.captureEndpoint = this.fwBase.buildEndpoint(CARD_CAPTURE_URL);
        this.refundEndpoint = this.fwBase.buildEndpoint(CARD_REFUND_URL);
        this.voidEndpoint = this.fwBase.buildEndpoint(CARD_VOID_URL);
        this.validateEndpoint = this.fwBase.buildEndpoint(CARD_VALIDATE_URL);
        this.chargeEndpoint = this.fwBase.buildEndpoint(CARD_CHARGE_URL);
        this.enquiryEndpoint = this.fwBase.buildEndpoint(CARD_ENQUIRY_URL);
        this.validateEnquiryEndpoint = this.fwBase.buildEndpoint(CARD_VALIDATE_ENQUIRY_URL);
        this.transactionStatusEndpoint = this.fwBase.buildEndpoint(CARD_TRANSACTION_STATUS_URL);
    }

    /**
     * Prepare request payload, encrypting field values
     * @param data 
     * @returns {any}
     */
    private prepare(data: any): any {
        Object
            .keys(data)
            .forEach(key => {
                data[key] = this.fwBase.encrypt(data[key].toString());
            });
        
        data.merchantid = this.fwBase.merchantKey;
        return data;
    }
    /**
     * Tokenize a card to charge later
     * @param {CardTokenizeOptions} options
     * @returns {Promise<{}>}
     */
    async tokenize(options: CardTokenizeOptions): Promise<{}> {
       const value = validateTokenizePayload(options);
       const payload = this.prepare(value);
       return this.fwBase.post(this.tokenizeEndpoint, payload);
    }
    /**
     * Preauthorize funds on a tokenized card
     * @param {CardPreauthorizeOptions} options 
     * @returns {Promise<{}>}
     */
    async preauthorize(options: CardPreauthorizeOptions): Promise<{}> {
        const value = validatePreauthorizePayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.preauthorizeEndpoint, payload);
    }
    /**
     * Capture funds preauthorizedon a tokenized card
     * @param {CardCaptureOptions} options 
     * @returns {Promise<{}>}
     */
    async capture(options: CardCaptureOptions): Promise<{}> {
        const value = validateGenericPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.captureEndpoint, payload);
    }
    /**
     * Charge tokenized card for an amount
     * @param {CardTokenChargeOptions} options 
     * @returns {Promise<{}>}
     */
    async chargeWithToken(options: CardTokenChargeOptions): Promise<{}> {
        const value = validateCardTokenChargePayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.chargeEndpoint, payload);
    }
    /**
     * Tokenize and charge card
     * @param {CardChargeOptions} options 
     * @returns {Promise<{}>}
     */
    async charge(options: CardChargeOptions): Promise<{}> {
        const value = validateCardChargePayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.chargeEndpoint, payload);
    }
    /**
     * Refund funds on a preauthorized card
     * @param {CardRefundOptions} options 
     * @returns {Promise<{}>}
     */
    async refund(options: CardRefundOptions): Promise<{}> {
        const value = validateGenericPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.refundEndpoint, payload);
    }

    /**
     * Void preauthorized funds on a tokenized card
     * @param {CardVoidOptions} options 
     * @returns {Promise<{}>}
     */
    async void(options: CardVoidOptions): Promise<{}> {
        const value = validateGenericPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.voidEndpoint, payload);
    }
    /**
     * Validate a tokenization 
     * @param {CardValidateOptions} options 
     * @returns {Promise<{}>}
     */
    async validate(options: CardValidateOptions): Promise<{}> {
        const value = validatePayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.validateEndpoint, payload);
    }
    /**
     * Card Enquiry
     * @param {CardEnquiryOptions} options 
     * @returns {Promise<{}>}
     */
    async enquiry(options: CardEnquiryOptions): Promise<{}> {
        const value = validateEnquiryPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.enquiryEndpoint, payload);
    }
    /**
     * Validate a Card Enquiry
     * @param {CardEnquiryValidateOptions} options 
     * @returns {Promise<{}>}
     */
    async validateEnquiry(options: CardEnquiryValidateOptions): Promise<{}> {
        const value = validateCardEnquiryPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.validateEnquiryEndpoint, payload);
    }
    /**
     * Get transaction status
     * @param {TransactionStatusOptions} options 
     * @returns {Promise<{}>}
     */
    async transactionStatus(options: TransactionStatusOptions): Promise<{}> {
        const value = validateTransasctionStatusPayload(options);
        const payload = this.prepare(value);
        return this.fwBase.post(this.transactionStatusEndpoint, payload);
    }
}