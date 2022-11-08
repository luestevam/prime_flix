import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "04f01c3ffa770167e9111ee100a44462",
            language: "pt=BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filmes não encontrado");
        });
    }
    loadFilme();

    return () => console.log("Componente foi desmontado");
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <strong>{filme.title}</strong>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} /10</strong>
    </div>
  );
}

export default Filme;
