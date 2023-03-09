import { EffectHook } from "./hooks/basic/EffectHook";
import { LayoutEffectHook } from "./hooks/basic/LayoutEffectHook";
import { CounterClass, CounterHook } from "./hooks/basic/StateHook";

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <EffectHook />
      <LayoutEffectHook />
    </div>
  );
}

export default App;
