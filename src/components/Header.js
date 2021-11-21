import { Link } from "react-router-dom";
import Cont1 from "./Cont1";
import Cont5 from "./Cont5";
import Cont2 from "./cont2";

const Header = ({ token }) => {
  return (
    <div className="header-container">
      <Cont1 />
      <Cont2 />
      <Cont5 />
      {token ? (
        <>
          <button className="double">
            <Link to="/login">Se déconnecter</Link> <span> | </span>
            <Link to="/publish">Vends maintenant</Link>
          </button>
        </>
      ) : (
        <>
          <Link to="/signup">S'inscrire</Link>
          <Link to="login">Se connecter</Link>
        </>
      )}
    </div>
  );
};

export default Header;
