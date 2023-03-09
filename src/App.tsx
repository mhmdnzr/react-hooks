import { EffectHook } from "./hooks/basic/EffectHook";
import { LayoutEffectHook } from "./hooks/additional/LayoutEffectHook";
import { CounterClass, CounterHook } from "./hooks/basic/StateHook";
import ContextHook from "./hooks/basic/ContextHook";

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <EffectHook />
      <LayoutEffectHook />
      <ContextHook/>
    </div>
  );
}

export default App;
