import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>OOOPS pagina non trovata! Errore 404"</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Ritorna indietro
      </button>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFoundPage;
