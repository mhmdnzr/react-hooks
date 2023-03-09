import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import FooterComponent from "./components/shared/FooterComponent";
import NavbarComponent from "./components/shared/NavbarComponent";
import { routers } from "./routes/Roots";

function App() {
    return (
        <Fragment>
            <NavbarComponent />
            <RouterProvider router={routers} />
            <FooterComponent />
        </Fragment>
    );
}

export default App;
