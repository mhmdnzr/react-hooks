import { useDebugValue, useState, useEffect } from "react";

const useDelayedMessage = (msg: string, delay: number) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setMessage(msg);
        }, delay);
    });
    useDebugValue(message, (message) =>
        message ? "Message Set" : "Message not set"
    );
    return message;
};

const DebugHook = () => {
    const delayedMessage = useDelayedMessage("foo", 1500);
    return <div>{delayedMessage}</div>;
};

export default DebugHook;
