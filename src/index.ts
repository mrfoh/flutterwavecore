import FlutterwaveBase from "./base";
import { FlutterwaveOptions } from "./types";
import FlutterwaveCard from "./card";

const defaults: FlutterwaveOptions = {
    sandbox: false,
    endpoint: ''
}

class Flutterwave {
    private flutterwave: FlutterwaveBase;
    Card: FlutterwaveCard;

    constructor(merchant_key: string, api_key: string, options?: Partial<FlutterwaveOptions>) {
        if (!merchant_key || !api_key) throw new Error('merchant_key and api_key not defined');

        const fwOptions: FlutterwaveOptions = {
            ...defaults,
            ...options
        }

        this.flutterwave = new FlutterwaveBase(merchant_key, api_key, fwOptions);
        this.Card = new FlutterwaveCard(this.flutterwave);
    }
}

module.exports = Flutterwave;
export default Flutterwave;