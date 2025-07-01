import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import HtmlLogo from '../assets/html.svg'
import CssLogo from '../assets/css.svg'
import JsLogo from '../assets/javascript.svg'
import CsharpLogo from '../assets/csharp.svg'
import ReactLogo from '../assets/react.svg'
import PooLogo from '../assets/poo.svg'
import DotNetLogo from '../assets/dotnet.svg'
import PrismaLogo from '../assets/prisma.svg'
import SqlLogo from '../assets/sql.svg'
import FigmaLogo from '../assets/figma.svg'
import PortugueseIcon from '../assets/portuguese.svg'
import EnglishIcon from '../assets/english.svg'
import SpanishIcon from '../assets/spanish.svg'
import styles from'./About.module.css'

const About = () =>{
    return(
    <div>
        <Header/>
        <main className={styles.mainAbout}>
            <p className={styles.aboutText}>Possuo 20 anos de idade, resido no Rio Grande do Sul e atualmente estou cursando o 5º semestre de Ciência da Computação na Universidade Cruzeiro do Sul Virtual. Aficionado por tecnologia desde a infância, dedido meu tempo ao estudo e aperfeiçoamento de minhas habilidades na área, buscando usá-las profissionalmente.</p>

            <section className={styles.infosLists}>

            <section className={styles.listTech}>
            <h2>Habilidades</h2>

            <ul>
                <li><img src={CsharpLogo} alt="C#" /></li>
                <li><img src={DotNetLogo} alt="DotNet" /></li>
                <li><img src={ReactLogo} alt="React" /></li>
                <li><img src={PrismaLogo} alt="Prisma" /></li>
                <li><img src={SqlLogo} alt="SQL" /></li>
                <li><img src={PooLogo} alt="Poo" /></li>
                <li><img src={JsLogo} alt="JS" /></li>
                <li><img src={HtmlLogo} alt="Html" /></li>
                <li><img src={CssLogo} alt="Css" /></li>
                
            </ul>
            </section>

            <section className={styles.listLanguages}>
            <h2>Idiomas</h2>

            <ul>
                <li><img src={PortugueseIcon} alt="Português" />Nativo</li>
                <li><img src={EnglishIcon} alt="Inglês" />Intermediário</li>
                <li><img src={SpanishIcon} alt="Espanhol" />Básico</li>
            </ul>
            </section>

            <section className={styles.listFormations}>
            <h2>Formações</h2>
            <ul>
                <li>E.E.E.F Conde de Afonso Celso - Ensino Fundamental (2011-2019)</li>
                <li>Colégio Estadual Frei Getúlio - Ensino Médio (2020-2022)</li>
                <li>Universidade Cruzeiro do Sul Virtual - Ciência da Computação - Bacharelado (2023-2026)</li>
            </ul>
            </section>
            </section>
        </main>
        <Footer/>
    </div>
    )

}

export default About