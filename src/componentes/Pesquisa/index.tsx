import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../Input";
import { useState } from 'react';
import { livros } from './dadosPesquisa';

//#region   Componentes Estilizados
const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 90px 0;
    height: 270px;
    width: 100%;
    margin-bottom: 75px;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultadoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Resultado = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
//#endregion   Componentes Estilizados

export default function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState<any[] | never[]>([]);

    //#region   Funções Handle de Eventos
    function handleOnChange(evento: any) {
        const textoDigitado = evento.target.value.toUpperCase().trim();
        if (textoDigitado == '') {
            setLivrosPesquisados([]);
        } else {
            const resultadoPesquisa = livros
                .filter(livro => livro.nome.toUpperCase().includes(textoDigitado));
            setLivrosPesquisados(resultadoPesquisa);
        }
    }
    //#endregion    Funções

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>

            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>

            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={handleOnChange} />

            <ResultadoContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado key={uuidv4()}>
                        <img src={livro.src} />
                        <p>{livro.nome}</p>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </PesquisaContainer>
    );
}