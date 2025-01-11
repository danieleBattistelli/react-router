import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ShowPage() {
  const [blog, setblog] = useState(null);
  const { id } = useParams();

  useEffect(()=> {
    axios.get(`http://localhost:3000/posts/${id}`).then((resp) =>{
      setblog(resp.data);
    });
  }, []);

  return (
    <main>
      <h1>Pagina dei dettagli {id}</h1>

      <Link to="/list-blogs">List</Link> <br />
      <Link to="/">Home</Link>
    </main>
  )
}
export default ShowPage;