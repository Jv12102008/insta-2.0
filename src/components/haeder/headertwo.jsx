import "./headertwo.css";
import soon_foto from "../../img/logo-instagram.svg";
import soon_nome from "../../img/instagram.svg";
import paper_plane from "../../img/paper-plane-outline.svg";

export function Headertwo() {
  return (
    <div className="hidden">
    <header className="App-headertwo">
      <nav>
        <ul>
          <li>
            <img
              className="header-soon-img"
              src={soon_foto}
              alt="logo do instagram"
            />
            
          </li>
          <li>
          <img
              className="header-soon-name"
              src={soon_nome}
              alt="nome do instagram"
            />
          </li>
          <li>
            <img className="icon visible" src={paper_plane} alt="icon do header" />
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}