import { useId } from "react";

const UseidHook = () => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <div>
                <input id={id + "-firstName"} type="text" />
            </div>
            <label htmlFor={id + "-lastName"}>Last Name</label>
            <div>
                <input id={id + "-lastName"} type="text" />
            </div>
        </div>
    );
};

export default UseidHook;
