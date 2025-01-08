import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import videos from "data/db.json";
import styles from "./index.module.css";

const Inicio = () => {
    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>

            <section className={styles.container}>
            {
                videos.map((video)=>{
                    return <Card key={video.id} {...video} />;
                })
            }
            </section>
        </>
    );
}

export default Inicio