import { EffectHook } from "./hooks/basic/EffectHook";
import { LayoutEffectHook } from "./hooks/additional/LayoutEffectHook";
import { CounterClass, CounterHook } from "./hooks/basic/StateHook";
import ContextHook from "./hooks/basic/ContextHook";
import { ReducerHook } from "./hooks/additional/ReducerHook";

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <EffectHook />
      <LayoutEffectHook />
      <ContextHook />
      <ReducerHook initialCount={ 0} />
    </div>
  );
}

export default App;
