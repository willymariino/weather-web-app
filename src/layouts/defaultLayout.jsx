import Header from "../components/header";
import Background from "../components/background";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <Background /> {/* sfondo comune a tutte le pagine con posizionamento assoluto */}
            <Header />
            <Outlet />
        </>
    )
}

export default DefaultLayout