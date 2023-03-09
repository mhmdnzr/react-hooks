interface ICallback {
    productId: number;
    referrer: string;
    theme: string;
}

interface IData {
    referrer: string;
    orderDetails: {
        street: string;
        city: string;
        zipCode: string;
        count: number;
    };
}
