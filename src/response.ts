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