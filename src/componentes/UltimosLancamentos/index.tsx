import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'

//#region   Componentes Estilizados
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 26px;
    text-align: center;
    margin: 0;
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
            <Titulo>ÚLTIMOS LANÇAMENTOS:</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    );
}