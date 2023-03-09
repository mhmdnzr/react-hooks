import { memo, useState } from "react";

const ShippingForm = memo(function ShippingForm({ onSubmit }: any) {
    const [count, setCount] = useState(1);

    console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
    let startTime = performance.now();
    while (performance.now() - startTime < 50) {
        // Do nothing for 50 ms to emulate extremely slow code
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count,
        };
        onSubmit(orderDetails);
    }

    return (
        <form onSubmit={handleSubmit} name="dataForm">
            <p>
                <b>
                    Note: <code>ShippingForm</code> is artificially slowed down!
                </b>
            </p>
            <label>
                Number of items:
                <button type="button" onClick={() => setCount(count - 1)}>
                    –
                </button>
                {count}
                <button type="button" onClick={() => setCount(count + 1)}>
                    +
                </button>
            </label>
            <label>
                Street:
                <input name="street" />
            </label>
            <label>
                City:
                <input name="city" />
            </label>
            <label>
                Postal code:
                <input name="zipCode" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
});

export default ShippingForm;
