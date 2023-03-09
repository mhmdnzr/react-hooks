import { createContext, memo, useContext, useMemo } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light);

function ContextHook() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Button />
    </ThemeContext.Provider>
  );
}

// Simple
// function Toolbar(props: any) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }

// With memo
// function Button() {
//   let theme = useContext(ThemeContext);
//   return <ThemedButton {...theme} />;
// }

// const ThemedButton = memo(
//   ({ background, foreground }: { background: string; foreground: string }) => {
//     console.log(background, foreground);
//     // The rest of your rendering logic
//     return (
//       <button style={{ background: background, color: foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }
// );

// With useMemo
function Button() {
  let theme = useContext(ThemeContext);
  let bg = theme.background; // Your "selector"
  let fg = theme.foreground; // Your "selector"

  return useMemo(() => {
    // The rest of your rendering logic
    return (
      <button style={{ background: bg, color: fg }}>
        I am styled by theme context!
      </button>
    );
  }, [bg, fg]);
}

export default ContextHook;
