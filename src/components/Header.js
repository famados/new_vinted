import { Link } from "react-router-dom";
import Cont1 from "./Cont1";
import Cont5 from "./Cont5";

const Header = ({ token }) => {
  return (
    <div className="header-container">
      {token ? (
        <button>Se déconnecter</button>
      ) : (
        <>
          {" "}
          <Link to="/signup">S'inscrire</Link>
          <Link to="login">Se connecter</Link>
        </>
      )}

      <Link to="/publish">Vends tes articles</Link>

      <Cont1 />
      <Cont5 />
    </div>
  );
};

export default Header;
