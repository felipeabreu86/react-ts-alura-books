import estilo from './estilo.module.css';

interface Props {
    textoOpcoes: string[],
}

export default function OpcoesHeader({ textoOpcoes }: Props) {
    return (
        <ul className={estilo.opcoes}>
            {textoOpcoes.map((texto) => (
                <li className={estilo.opcao}><p>{texto}</p></li>
            ))}
        </ul>
    );
}