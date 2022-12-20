import styled from 'styled-components'
import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo';
import { v4 as uuidv4 } from 'uuid';

//#region   Componentes Estilizados
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
//#endregion    Componentes Estilizados

export default function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#EB9B00"}
                tamanhoFonte={26}
                alinhamento={"center"}
            >ÚLTIMOS LANÇAMENTOS:</Titulo>

            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img key={uuidv4()} src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    );
}