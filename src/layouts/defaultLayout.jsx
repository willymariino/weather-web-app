import Header from "../components/header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default DefaultLayout