import './Home.css'
import { Link } from 'react-router-dom'
import ImgLuiz from '../assets/jacoby-portfolio.png'

const Home = () =>{
    return(
    <div>
        <header>
            <h1 id="name-header">&#x3c;Luiz Jacoby/&#x3e;</h1>
            <nav id="menu">
                <ul>
                    <li><Link to="/"><span>Início</span></Link></li>
                    <li><Link to="/about"><span>Sobre Mim</span></Link></li>
                    <li><Link to="/projects"><span>Projetos</span></Link></li>
                </ul>
            </nav>
        </header>
    
        <main>
        <section id="home">
            <p id="welcome-text">Bem-vindo! Me chamo</p>
            <p id="name-text">Luiz Jacoby</p>
            <p id="csharp-text">Desenvolvedor Full-Stack</p>
        </section>
        <section id="img-profile">
            <img src={ImgLuiz} alt="Foto de Perfil"/>
        </section>
        </main> 

        <footer>
            <ul>
                <li><Link to="https://github.com/SrJacoby" target="_blank"><span>GitHub</span></Link></li>
                <li><Link to="https://www.linkedin.com/in/luiz-jacoby/" target="_blank"><span>Linkedin</span></Link></li>
            </ul>
        </footer>
    </div>
    )

}

export default Home