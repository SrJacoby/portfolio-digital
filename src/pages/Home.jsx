import styles from './Home.module.css'
import Header from './Header'
import Footer from './Footer'
import ImgLuiz from '../assets/jacoby-portfolio.png'

const Home = () =>{
    return(
    <div>
        <Header/>
        <main id={styles.mainHome}>
        <section id={styles.home}>
            <p id={styles.welcomeText}>Bem-vindo! Me chamo</p>
            <p id={styles.nameText}>Luiz Jacoby</p>
            <p id={styles.stackText}>Desenvolvedor Full-Stack</p>
        </section>
        <section id={styles.imgProfile}>
            <img src={ImgLuiz} alt="Foto de Perfil"/>
        </section>
        </main> 

        <Footer/>
    </div>
    )

}

export default Home