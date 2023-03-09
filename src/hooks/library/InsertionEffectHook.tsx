import { useInsertionEffect } from "react";

let isInserted = new Set();
function useCSS(rule:any) {
    useInsertionEffect(() => {
        // As explained earlier, we don't recommend runtime injection of <style> tags.
        // But if you have to do it, then it's important to do in useInsertionEffect.
        if (!isInserted.has(rule)) {
            isInserted.add(rule);
            document.head.appendChild(getStyleForRule(rule));
        }
    });
    return rule;
}


const InsertionEffectHook = () => {
    const className = useCSS("...");
    return <div className={className} />;
};

export default InsertionEffectHook;
