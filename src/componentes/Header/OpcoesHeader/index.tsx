import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    textoOpcoes: string[],
}

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

export default function OpcoesHeader({ textoOpcoes }: Props) {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao key={uuidv4()}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    );
}