import { useNavigate } from "react-router-dom";
import "./Home.scss";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="./7578552-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay-content">
        <h1>Welcome to the App</h1>
        <button onClick={() => navigate("/registration")}>
          Go to Registration
        </button>
      </div>
    </div>
  );
}

export default Home;
