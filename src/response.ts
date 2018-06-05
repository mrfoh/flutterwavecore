export interface ResponseData {
    responsecode: string;
    responsemessage: string;
    otptransactionidentifier?: any;
    transactionreference: string;
    responsehtml?: any;
    responsetoken?: any;
}

export interface ValidateResponseDate {
}

export interface EnquiryResponseData {
    balance?: any;
    transactionref: string;
    cardType?: any;
    responsecode: string;
    responsemessage: string;
    otpref: string;
}

export interface TransactionStatusData {
    responsetoken?: any;
    responsecode: string;
    responsemessage: string;
    transactionreference: string;
    otptransactionidentifier: string;
    responsehtml?: any;
    batchno: string;
    merchtransactionreference: string;
    orderinfo: string;
    receiptno: string;
    transactionno: string;
}

export interface ChargeRefundResponseData {
    responsecode: string;
    responsetoken: string;
    responsemessage: string;
    transactionreference: string;
    otptransactionidentifier: string;
    responsehtml: string;
    redirecturl: string;
    avsresponsecode: string;
    avsresponsemessage: string;
}

export interface ChargeRefundResponse {
    data: ChargeRefundResponseData;
}

export interface ResponseDataExtended extends ResponseData {
    authorizeId: string;
}
export interface GenericResponse {
    data: ResponseData
}

export interface GenericResponseExtended  {
    data: ResponseDataExtended
}

export interface GenericValidateRespone {
    data: ValidateResponseDate
}

export interface EnquiryResponse {
    data: EnquiryResponseData
}

export interface TransactionStatusResponse {
    data: TransactionStatusData;
}