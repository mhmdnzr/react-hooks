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

interface ICountryList {
    name: string;
    flag: string;
    region: string;
}

interface IChatStatus { isOnline: boolean }