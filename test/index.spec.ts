import Flutterwave from "../src/index";

describe("Flutterwave spec", () => {
    it("Errors with keys set", () => {
        expect(() => new Flutterwave()).toThrow();
    })

    it("should have a `Card` object", () => {
        expect(() => new Flutterwave('tk_hmzRdpMe2U','tk_CFMKpvoUA1LfPWDQd9m4').Card).toBeDefined();
    });

    it("Card should have required methods", () => {
        const fw = new Flutterwave('tk_hmzRdpMe2U','tk_CFMKpvoUA1LfPWDQd9m4');
        const Card = fw.Card;

        expect(Card.tokenize).toBeInstanceOf(Function);
        expect(Card.preauthorize).toBeInstanceOf(Function);
        expect(Card.capture).toBeInstanceOf(Function);
        expect(Card.refund).toBeInstanceOf(Function);
        expect(Card.void).toBeInstanceOf(Function);
        expect(Card.charge).toBeInstanceOf(Function);
        expect(Card.chargeWithToken).toBeInstanceOf(Function);
        expect(Card.enquiry).toBeInstanceOf(Function);
        expect(Card.validateEnquiry).toBeInstanceOf(Function);
    })
});