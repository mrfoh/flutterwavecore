import Flutterwave from "../src/index";
import { CardAuthModel, CardValidationOption } from "../src/types";
import { GenericResponse } from "../src/response";

describe("Flutterwave Card spec", () => {
    const fw = new Flutterwave('tk_hmzRdpMe2U','tk_CFMKpvoUA1LfPWDQd9m4', { sandbox: true });
    const Card = fw.Card;

    it("should tokenize a card", () => {
        const options = {
            validateoption: CardValidationOption.SMS,
            authmodel: CardAuthModel.NOAUTH,
            cardno: "4123450131001381",
            cvv: "883",
            expirymonth: "09",
            expiryyear: "2020",
        }

        Card.tokenize(options)
            .then(response => {
                expect(response).toBeDefined();
                expect(response).toHaveProperty("data")
                expect(response.data).toHaveProperty("responsemessage");
                expect(response.data).toHaveProperty("responsetoken");
                expect(response.data.responsecode).toEqual("00");
                expect(response.data.responsemessage).toEqual("Completed Successfully");
            }, error => {
                expect(error).not.toBeDefined();
            })
    }, 10000);
});