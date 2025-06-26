import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from'./About.module.css'

const About = () =>{
    return(
    <div>
        <Header/>
        <main id={styles.mainAbout}>
            <p>Possuo 20 anos de idade, moro no Rio Grande do Sul e atualmente estou cursando o 5º semestre de Ciência da Computação na Universidade Cruzeiro do Sul Virtual. Aficionado por tecnologia desde a infância, dedido meu tempo ao estudo e aperfeiçoamento de minhas habilidades na área, buscando usá-las profissionalmente.</p>

            <h2>Habilidades</h2>

            <ul id={styles.listTech}>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Banco de Dados</li>
                <li>POO</li>
            </ul>

            <h2>Idiomas</h2>

            <ul id={styles.listLanguages}>
                <li>Português: Nativo</li>
                <li>Inglês: Intermediário</li>
                <li>Espanhol: Básico</li>
            </ul>

            <h2>Formação</h2>
            <ul id={styles.listFormations}>
                <li>E.E.E.F Conde de Afonso Celso - Ensino Fundamental (2011-2019)</li>
                <li>Colégio Estadual Frei Getúlio - Ensino Médio (2020-2022)</li>
                <li>Universidade Cruzeiro do Sul Virtual - Ciência da Computação - Bacharelado (2023-2026)</li>
            </ul>
        </main>
        <Footer/>
    </div>
    )

}

export default About