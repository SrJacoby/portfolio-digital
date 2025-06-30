import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from './Projects.module.css'
import { Link } from "react-router-dom"
import ProjCadastro from '../assets/proj-cadastro.png'
import ProjModoEscuro from '../assets/proj-dark-theme.png'
import ProjCrud from '../assets/proj-crud.png'
import ProjCalc from '../assets/proj-calc.png'
import ProjTimer from '../assets/proj-timer.png'
import ProjCloneCruzeiro from '../assets/proj-cruz.png'
import HtmlLogo from '../assets/html.svg'
import CssLogo from '../assets/css.svg'
import JsLogo from '../assets/javascript.svg'
import CsharpLogo from '../assets/csharp.svg'
import ReactLogo from '../assets/react.svg'
import SqliteLogo from '../assets/sqlite.svg'

const Projects = () =>{
    return(
    <div>
        <Header/>
        <main className={styles.mainProjects}>
            <section className={styles.projectSections}>
            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/projeto-cadastro" target="_blank"><img src={ProjCadastro} alt="Imagem do Projeto"/>Projeto Cadastro de Usuários</Link></li>
                <section className={styles.imgTech}>
                <img src={ReactLogo} alt="React" />
                <img src={CsharpLogo} alt="C#" />
                <img src={SqliteLogo} alt="Sqlite" />
                </section>
            </section>

            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/projeto-crud" target="_blank"><img src={ProjCrud} alt="Imagem do Projeto" />Projeto CRUD</Link></li>
                <section className={styles.imgTech}>
                <img src={CsharpLogo} alt="C#" />
                <img src={SqliteLogo} alt="Sqlite" />
                </section>
            </section>
            
            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/modo-escuro-react" target="_blank"><img src={ProjModoEscuro} alt="Imagem do Projeto" />Projeto Modo Escuro</Link></li>
                <section className={styles.imgTech}>
                <img src={ReactLogo} alt="React" />
                </section>
            </section>
        
            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/calculadora-js" target="_blank"><img src={ProjCalc} alt="Imagem do Projeto" />Projeto Calculadora</Link></li>
                <section className={styles.imgTech}>
                <img src={JsLogo} alt="JavaScript" />
                <img src={HtmlLogo} alt="HTML" />
                <img src={CssLogo} alt="CSS" />
                </section>
            </section>

            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/timer" target="_blank"><img src={ProjTimer} alt="Imagem do Projeto" />Projeto Timer</Link></li>
                <section className={styles.imgTech}>
                <img src={JsLogo} alt="JavaScript" />
                <img src={HtmlLogo} alt="HTML" />
                <img src={CssLogo} alt="CSS" />
                </section>
            </section>
            
            <section className={styles.projectSection}>
                <li><Link to="https://github.com/SrJacoby/clone-cruzeiro-do-sul" target="_blank"><img src={ProjCloneCruzeiro} alt="Imagem do Projeto" />Projeto Clone Cruzeiro do Sul Virtual</Link></li>
               <section className={styles.imgTech}>
                <img src={HtmlLogo} alt="HTML" />
                <img src={CssLogo} alt="CSS" />
                </section>
            </section>
            </section>
        </main>
        <Footer/>
        </div>
    )

}

export default Projects