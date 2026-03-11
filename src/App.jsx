import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashBoard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import DefaultLayout from "./layouts/defaultLayout"

function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>

            <Route index Component={DashBoard} />
            <Route path="settings" Component={Settings} />

          </Route>


        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
