import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.nameHeader}>&#x3c;Luiz Jacoby/&#x3e;</h1>
      <nav className={styles.menu}>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) =>
                isActive ? `${styles.active}` : ""
              }><span>Início</span></NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) =>
                isActive ? `${styles.active}` : ""
              }><span>Sobre Mim</span></NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) =>
                isActive ? `${styles.active}` : ""
              }><span>Projetos</span></NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header