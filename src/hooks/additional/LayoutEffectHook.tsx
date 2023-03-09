import { useLayoutEffect, useState } from "react";
function LayoutEffectHook() {
  const [value, setValue] = useState(0);

  // useLayoutEffect is sync
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 2000);
    }
  }, [value]);

  console.log("render", value);

  return <button onClick={() => setValue(0)}>random number: {value}</button>;
}

export { LayoutEffectHook };
