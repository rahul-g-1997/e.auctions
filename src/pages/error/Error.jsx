import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404 page not found</h1>
      <Link to={"/"}><button>Retune Home</button></Link>
      
    </div>
  );
}
