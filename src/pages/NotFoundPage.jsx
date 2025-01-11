import { Link } from "react-router-dom";

function NotFoundPage() {
  

  return (
    <>
      <h1>OOOPS pagina non trovata! Errore 404"</h1>
      <div className="d-flex m-3">
        <Link to="/list-blogs" className="btn btn-success mx-2">List</Link> <br />
        <Link to="/" className="btn btn-warning mx-2">Home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
