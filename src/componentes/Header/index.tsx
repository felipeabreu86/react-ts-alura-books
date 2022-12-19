import IconesHeader from "./IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "./OpcoesHeader";
import perfil from './../../imagens/perfil.svg';
import sacola from './../../imagens/sacola.svg';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola];

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader textoOpcoes={textoOpcoes} />
            <IconesHeader icones={icones} />
        </HeaderContainer>
    );
}