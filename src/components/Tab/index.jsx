import React, { useState, useEffect } from "react";
import api from "../../services/api";

const Tab = () => {
  const [results, setResults] = useState([]);

  async function getAll() {
    await api
      .get("/api/fantasia")
      .then((res) => setResults(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <React.Fragment>
      <div className="tabs tab-lg">
        <a className="tab tab-bordered tab-lg">Busca Geral</a>
        <a className="tab tab-bordered tab-active  tab-lg">
          Busca Por Categoria
        </a>
      </div>
      <br />
      <div>
        <ul>
          {results.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Tab;
