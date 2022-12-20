import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from './../../imagens/livro2.png';

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

            <CardRecomenda
                titulo={"Talvez você se interesse por..."}
                subtitulo={"Angular 10"}
                descricao={"Construindo uma aplicação integrada com a plataforma Google"}
                imagem={imagemLivro}
            />

            <CardRecomenda
                titulo={"Talvez você se interesse por..."}
                subtitulo={"Angular 11"}
                descricao={"Construindo uma aplicação integrada com a plataforma Google"}
                imagem={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}