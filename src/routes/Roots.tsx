import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/404";
import { CallbackHook } from "../hooks/additional/Callback/CallbackHook";
import ImperativeHandleHook from "../hooks/additional/ImperativeHandleHook";
import { LayoutEffectHook } from "../hooks/additional/LayoutEffectHook";
import SearchFilter from "../hooks/additional/MemoHook";
import { ReducerHook } from "../hooks/additional/ReducerHook";
import { RefHook } from "../hooks/additional/RefHook";
import ContextHook from "../hooks/basic/ContextHook";
import { EffectHook } from "../hooks/basic/EffectHook";
import { CounterClass, CounterHook } from "../hooks/basic/StateHook";
import Home from "../pages/Home";
import DebugValueHook from "../hooks/additional/DebugHook";
import DeferredHook from "../hooks/additional/Deferred/DeferredHook";
import UseidHook from "../hooks/additional/UseidHook";
import { TransitionHook } from "../hooks/additional/Transition/TransitionHook";

const rootsList = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        name: "stateClass",
        path: "/State/ClassComponent",
        element: <CounterClass />,
    },
    {
        name: "stateFC",
        path: "/State/FC",
        element: <CounterHook />,
    },
    {
        name: "useEffect",
        path: "/useEffect",
        element: <EffectHook />,
    },
    {
        name: "useLayoutEffect",
        path: "/useLayoutEffect",
        element: <LayoutEffectHook />,
    },
    {
        name: "useContext",
        path: "/useContext",
        element: <ContextHook />,
    },
    {
        name: "useReducer",
        path: "/useReducer",
        element: <ReducerHook initialCount={0} />,
    },
    {
        name: "useCallback",
        path: "/useCallback",
        element: (
            <CallbackHook productId={5} referrer="mohammad" theme="dark" />
        ),
    },
    {
        name: "useMemo",
        path: "/useMemo",
        element: <SearchFilter />,
    },
    {
        name: "useRef",
        path: "/useRef",
        element: <RefHook />,
    },
    {
        name: "useImperativeHandle",
        path: "/useImperativeHandle",
        element: <ImperativeHandleHook />,
    },
    {
        name: "useDebugValue",
        path: "/useDebugValue",
        element: <DebugValueHook />,
    },
    {
        name: "useDeferredValue",
        path: "/useDeferredValue",
        element: <DeferredHook />,
    },
    {
        name: "useId",
        path: "/useId",
        element: <UseidHook />,
    },
    {
        name: "useTransition",
        path: "/useTransition",
        element: <TransitionHook />,
    },
];

const routers = createBrowserRouter(rootsList);

export { rootsList, routers };
