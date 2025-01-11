import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


function ShowPage() {
  const [blog, setblog] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((resp) => {
        setblog(resp.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      });
  }, [id]);

  return (
    <main>
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p><img src={blog.image} alt="Blog" style={{ width: '200px' }} /></p>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>Tags: {blog.tags.join(', ')}</p>
          <Link to={`/list-blogs/${blog.id - 1}`} className="btn btn-primary mx-2">
            Precedente
          </Link>
          <Link to={`/list-blogs/${blog.id + 1}`} className="btn btn-primary mx-2">
          Successivo
        </Link>
        </div>
      )}
      <div className="d-flex m-3">
        <Link to="/list-blogs" className="btn btn-success mx-2">List</Link> <br />
        <Link to="/" className="btn btn-warning mx-2">Home</Link>
      </div>
    </main>
  )
}
export default ShowPage;