import Cabecera from "componentes/Cabecera"
import Container from "componentes/Container"
import Pie from "componentes/Pie"
import FavoritoProvider from "context/Favoritos"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecera />
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route index element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path=":id" element={<Player />}></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes