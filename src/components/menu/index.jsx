import styles from "./Menu.module.css";
import MenuLink from "../menuLink";

export default function AppRoutes() {

    return (
        <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">
                Início
            </MenuLink>
            <MenuLink to="/sobremim">
                Sobre mim
            </MenuLink>
        </nav>
        </header>
    );
}
