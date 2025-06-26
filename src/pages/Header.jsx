import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 id={styles.nameHeader}>&#x3c;Luiz Jacoby/&#x3e;</h1>
      <nav id={styles.menu}>
        <ul>
          <li><NavLink to="/" end><span>Início</span></NavLink></li>
          <li><NavLink to="/about"><span>Sobre Mim</span></NavLink></li>
          <li><NavLink to="/projects"><span>Projetos</span></NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header