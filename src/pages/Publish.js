import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", file);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
      }

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <br />
        <h4>Titre</h4>
        <input onChange={(event) => setTitle(event.target.value)} type="text" />
        <br />
        <h4>Description</h4>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        />
        <br />
        <h4>Marque</h4>
        <input onChange={(event) => setBrand(event.target.value)} type="text" />
        <br />
        <h4>Taille</h4>
        <input onChange={(event) => setSize(event.target.value)} type="text" />
        <br />
        <h4>Couleur</h4>
        <input onChange={(event) => setColor(event.target.value)} type="text" />
        <br />
        <h4>Etat</h4>
        <input
          onChange={(event) => setCondition(event.target.value)}
          type="text"
        />
        <br />
        <h4>Lieu</h4>
        <input onChange={(event) => setCity(event.target.value)} type="text" />
        <br />
        <h4>Prix</h4>
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="number"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Publish;
