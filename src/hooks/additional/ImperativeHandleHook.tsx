import { forwardRef, useImperativeHandle, useRef, useState } from "react";

// useImperativeHandle allows us to pass values and functions from a Child component to a Parent using a ref.

// Parent Component
const ImperativeHandleHook = () => {
    const ref: any = useRef();

    return (
        <div>
            <ComponentWithButton ref={ref} />
            <button onClick={() => ref.current.increment()}>
                parent button
            </button>
        </div>
    );
};

// Child Component
const ComponentWithButton = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({ increment }));

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div>
            <button onClick={increment}>child button</button>
            <h2>Count: {count}</h2>
        </div>
    );
});
export default ImperativeHandleHook;
