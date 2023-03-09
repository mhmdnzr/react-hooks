import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

function CallbackHook({ productId, referrer, theme }: ICallback) {
    const handleSubmit = useCallback(
        (orderDetails: any) => {
            post("/product/" + productId + "/buy", {
                referrer,
                orderDetails,
            });
        },
        [productId, referrer]
    );

    return (
        <div className={theme}>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
}

function post(url: string, data: IData) {
    // Imagine this sends a request...
    console.log("POST /" + url);
    console.log(data);
}

export { CallbackHook };
