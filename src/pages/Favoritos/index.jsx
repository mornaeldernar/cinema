import Banner from 'componentes/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';

import { useFavoritosContext } from 'context/Favoritos';
const Favoritos = () => {
    const {favorito} = useFavoritosContext();
    return (
    <>
        <Banner img="favorite" color="#44d97d" />
        <Titulo>
            <h1>Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
        {
            favorito.map((video)=>{
                return <Card key={video.id} {...video} />
            })
        }
        </section>
    </>
    );
}
export default Favoritos