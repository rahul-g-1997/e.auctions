import { Link } from "react-router-dom";

export default function Notices() {
  return (
    <div>
      <h1>COMING SOON</h1>
      <p>Our website is under construction, follow us for update now!</p>
      <Link to={"/"}>
        <button>Retune Home</button>
      </Link>
    </div>
  );
}
