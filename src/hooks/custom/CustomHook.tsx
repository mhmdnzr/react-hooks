import useBoolean from "./useBoolean";

export default function CustomHook() {
    const [isToggle, { setToggle }]: any = useBoolean(false);

    return (
        <div>
            <button type="button" onClick={setToggle}>
                Toggle
            </button>
            {isToggle.toString()}
        </div>
    );
}
