import Header from "../components/header";
import Background from "../components/background";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <Background />
            <Header />
            <Outlet />
        </>
    )
}

export default DefaultLayout