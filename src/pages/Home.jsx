import styles from './Home.module.css'
import Header from './Header'
import Footer from './Footer'
import ImgLuiz from '../assets/jacoby-portfolio.png'

const Home = () =>{
    return(
    <div>
        <Header/>
        <main className={styles.mainHome}>
        <section className={styles.home}>
            <p className={styles.welcomeText}>Bem-vindo! Me chamo</p>
            <p className={styles.nameText}>Luiz Jacoby</p>
            <p className={styles.stackText}>Desenvolvedor Full-Stack</p>
        </section>
        <section className={styles.imgProfile}>
            <img src={ImgLuiz} alt="Foto de Perfil"/>
        </section>
        </main> 

        <Footer/>
    </div>
    )

}

export default Home