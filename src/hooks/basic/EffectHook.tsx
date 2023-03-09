import { useEffect, useState } from "react";

function EffectHook(props: any) {
  const [value, setValue] = useState(0);
  
  
  // useEffect is async
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 2000);
    }

    // const subscription = props.source.subscribe();
    // return () => {
    //   // Clean up the subscription
    //   // The clean-up function runs before the component is removed from the UI to prevent memory leaks.
    //   // If a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect.
    //   subscription.unsubscribe();
    // };
  }, [value]);

  console.log("render", value);

  return <button onClick={() => setValue(0)}>random number: {value}</button>;
}

export { EffectHook };
