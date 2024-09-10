import React, { useEffect, useState } from "react";
// import "./Main.css"
// import './Main'
import "./Details.css";

import { useParams } from "react-router-dom";
import axios from "axios";

const Detilis = () => {
  const [albon, setAlbon] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setAlbon(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(id);

  return (
    <div className="container">
      <img className="albom" src={albon?.images} alt="im not faunt" />
      <span className="title">{albon?.title}</span>
      <span className="price">${albon.price}</span>
      <br />
      <span className="hours">🌟 about 14 hours</span>
      <p>{albon.description}</p>
    </div>
  );
};

export default Detilis;
