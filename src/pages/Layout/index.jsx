import Cabecera from "componentes/Cabecera";
import Container from "componentes/Container";
import Pie from "componentes/Pie";
import FavoritoProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie/>
        </main>
    );
}
export default Layout