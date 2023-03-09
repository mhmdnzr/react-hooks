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

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/State/ClassComponent",
        element: <CounterClass />,
    },
    {
        path: "/State/FC",
        element: <CounterHook />,
    },
    {
        path: "/useEffect",
        element: <EffectHook />,
    },
    {
        path: "/useLayoutEffect",
        element: <LayoutEffectHook />,
    },
    {
        path: "/useContext",
        element: <ContextHook />,
    },
    {
        path: "/useReducer",
        element: <ReducerHook initialCount={0} />,
    },
    {
        path: "/useCallback",
        element: (
            <CallbackHook productId={5} referrer="mohammad" theme="dark" />
        ),
    },
    {
        path: "/useMemo",
        element: <SearchFilter />,
    },
    {
        path: "/useRef",
        element: <RefHook />,
    },
    {
        path: "/useImperativeHandle",
        element: <ImperativeHandleHook />,
    },
    {
        path: "/useDebugValue",
        element: <DebugValueHook />,
    }, {
        path: "/useDeferredValue",
        element: <DeferredHook />,
    },{
        path: "/useId",
        element: <UseidHook />,
    },
]);

export default routers;
