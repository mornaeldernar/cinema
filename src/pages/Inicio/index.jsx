import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [videos, setVideos] = useState([]);
    useEffect(()=> {
        fetch('https://my-json-server.typicode.com/mornaeldernar/cinema/videos')
        .then((response)=>response.json())
        .then((data)=>{
            setVideos(data);
        })
    }, []);
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