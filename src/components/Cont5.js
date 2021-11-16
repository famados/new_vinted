import { Link } from "react-router-dom";
const Cont5 = () => {
  return (
    <div className="cont5">
      <button className="inscription">
        <Link to="/signup">S'inscrire</Link>
      </button>
      <button className="connexion">
        <Link to="/login">Se connecter</Link>
      </button>
    </div>
  );
};

export default Cont5;
