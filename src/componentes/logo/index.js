import logo from './../../imagens/logo.svg';
import estilo from './estilo.module.css';

export default function Logo() {
    return (
        <div className={estilo.logo}>
            <img src={logo} alt='logotipo' />
            <p><strong>Alura</strong>Books</p>
        </div >
    );
}