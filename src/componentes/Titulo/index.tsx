import styled from "styled-components"


type PropTypeTitulo = {
    cor?: string;
    tamanhoFonte?: number;
    alinhamento?: string;
};

export const Titulo = styled.div.attrs((props: PropTypeTitulo) => ({
    cor: props.cor,
    tamanhoFonte: props.tamanhoFonte,
    alinhamento: props.alinhamento,
})) <PropTypeTitulo>`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${(props) => props.cor || "#000"};
    font-size: ${(props) => props.tamanhoFonte || 36}px;
    text-align: ${(props) => props.alinhamento || "center"};
    margin: 0;
    `