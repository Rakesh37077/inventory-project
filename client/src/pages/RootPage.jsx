import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const RootPage = () => {
    return <>
        <Navigation/>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}

export default RootPage;