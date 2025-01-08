import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Layout from "pages/Layout"
import NotFound from "pages/NotFound"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path="videos/:id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes