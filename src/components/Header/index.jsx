import logo from "./img/logo.svg";
import "./style.css";
function Header({ showProducts }) {
  return (
    <div className="containerHeader">
      <div className="containerHeaderLogo">
        <img className="logo" src={logo} alt="Burguer Kenzie" />
      </div>
      <div className="containerHeaderInput">
        <input
          className="headerInputText"
          onChange={(event) => showProducts(event.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <button className="headerInputButton">Pesquisar</button>
      </div>
    </div>
  );
}
export default Header;