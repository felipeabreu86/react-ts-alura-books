import IconesHeader from "./IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "./OpcoesHeader";
import perfil from './../../imagens/perfil.svg';
import sacola from './../../imagens/sacola.svg';
import estilo from './estilo.module.css';


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola];

export default function Header() {
    return (
        <header className={estilo.AppHeader}>
            <Logo />
            <OpcoesHeader textoOpcoes={textoOpcoes} />
            <IconesHeader icones={icones} />
        </header>
    );
}