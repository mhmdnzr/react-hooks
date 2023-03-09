import { Component, useState } from "react";

type MyProps = any;
type MyState = { count: number };

const initialCount = 0;

class CounterClass extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { count: initialCount };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        
        <button
          onClick={() => this.setState(({ count }) => ({ count: count - 1 }))}
        >
          -
        </button>
        
        <button
          onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
        >
          +
        </button>
      </div>
    );
  }
}

function CounterHook() {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

export { CounterClass, CounterHook };
