import { EffectHook } from "./hooks/basic/EffectHook";
import { LayoutEffectHook } from "./hooks/additional/LayoutEffectHook";
import { CounterClass, CounterHook } from "./hooks/basic/StateHook";
import ContextHook from "./hooks/basic/ContextHook";
import { ReducerHook } from "./hooks/additional/ReducerHook";
import { CallbackHook } from "./hooks/additional/callback/CallbackHook";
import SearchFilter from "./hooks/additional/MemoHook";

function App() {
    return (
        <div className="App">
            <CounterClass />
            <CounterHook />
            <EffectHook />
            <LayoutEffectHook />
            <ContextHook />
            <ReducerHook initialCount={0} />
            <CallbackHook productId={5} referrer="mohammad" theme="dark" />
            <SearchFilter />
        </div>
    );
}

export default App;
