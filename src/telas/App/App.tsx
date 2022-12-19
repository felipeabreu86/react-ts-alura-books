import estilo from './App.module.css';
import Logo from './../../componentes/logo';
import perfil from './../../imagens/perfil.svg';
import sacola from './../../imagens/sacola.svg';


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola];

export default function App() {
  return (
    <div className={estilo.App}>
      <header className={estilo.AppHeader}>
        <Logo />
        <ul className={estilo.opcoes}>
          {textoOpcoes.map((texto) => (
            <li className={estilo.opcao}><p>{texto}</p></li>
          ))}
        </ul>

        <ul className={estilo.icones}>
          {icones.map((icone) => (
            <li className={estilo.icone}><img src={icone} /></li>
          ))}
        </ul>
      </header>
    </div>
  );
}