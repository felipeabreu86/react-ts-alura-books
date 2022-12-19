import estilo from './estilo.module.css';

interface Props {
    icones: string[],
}

export default function IconesHeader({ icones }: Props) {
    return (
        <ul className={estilo.icones}>
            {icones.map((icone) => (
                <li className={estilo.icone}><img src={icone} /></li>
            ))}
        </ul>
    );
}