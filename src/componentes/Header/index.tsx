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

export default function Header() {

    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
    const icones = [perfil, sacola];

    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader textoOpcoes={textoOpcoes} />
            <IconesHeader icones={icones} />
        </HeaderContainer>
    );
}