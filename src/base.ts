import { post, get } from "request";
import { STAGING_URL, PRODUCTION_URL } from './constants';
import { FlutterwaveOptions } from './types';
import { encrypt } from './helpers/security';

export default class FlutterwaveBase {
    readonly merchantKey: string;
    readonly apiKey: string;
    private endpoint: string;

    constructor(merchantKey: string, apiKey: string, options: FlutterwaveOptions) {
        this.merchantKey = merchantKey;
        this.apiKey = apiKey;
        this.endpoint = options.endpoint
            ? options.endpoint
            : options.sandbox ? STAGING_URL : PRODUCTION_URL;
    }

    buildEndpoint(path: string) {
        return `${this.endpoint}${path}`;
    }

    encrypt(payload: string) {
        return encrypt(this.apiKey, payload);
    }

    post<T>(uri: string, payload: any): Promise<T> {
        return new Promise((resolve, reject) => {
            post(uri, {
                json: true,
                body: payload,
                headers: {
                    'Aceept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }, (error, response, body) => {
                if (error) reject(error);
                if (response.statusCode >= 400) reject(body);
                if (body && body.status === 'error') reject(body);

                resolve(body);
            });
        });
    }
}