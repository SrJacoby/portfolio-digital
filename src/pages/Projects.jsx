import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from './Projects.module.css'

const Projects = () =>{
    return(
    <div>
        <Header/>
        <main id={styles.mainProjects}>
            <section id={styles.projectSection}>
            <section class="project-section">
                <a href="https://github.com/SrJacoby/calculadora-js" target="_blank">Projeto Calculadora em JavaScript</a>
                <p>Tecnologias: HTML, CSS e JavaScript</p>
            </section>

            <section class={styles.projectSection}>
                <a href="https://github.com/SrJacoby/timer" target="_blank">Projeto Timer em JavaScript</a>
                <p>Tecnologias: HTML, CSS e JavaScript</p>
            </section>

            <section class={styles.projectSection}>
                <a href="https://github.com/SrJacoby/verificador-idade" target="_blank">Projeto Verificador de Idade em JavaScript</a>
                <p>Tecnologias: HTML, CSS e JavaScript</p>
            </section>
        
        
            <section class={styles.projectSection}>
                <a href="https://github.com/SrJacoby/clone-cruzeiro-do-sul" target="_blank">Projeto Clone Cruzeiro do Sul Virtual</a>
                <p>Tecnologias: HTML e CSS</p>
            </section>

            <section class={styles.projectSection}>
                <a href="https://github.com/SrJacoby/calculadora-js" target="_blank">Projeto Loja Virtual</a>
                <p>Tecnologias: HTML e CSS</p>
            </section>

            <section class={styles.projectSection}>
                <a href="https://github.com/SrJacoby/loja-virtual" target="_blank">Projeto "The Beatles Tour"</a>
                <p>Tecnologias: HTML e CSS</p>
            </section>
            </section>
        </main>
        <Footer/>
        </div>
    )

}

export default Projects