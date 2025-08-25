import Slider from "../components/Slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Homepage() {
  return (
    <div className="homepage w-100">
      <div className="welcome text-center">
        <h1>GRIEVER</h1>
        <h3>LOVES SHY GUY</h3>
        <p>Benvenuti nella pagina dei ragazzi timidi</p>
      </div>

      <section className="slider">
        <Slider />
      </section>


      <section className="socials my-2">
        <h2 className="text-center">FOLLOW US</h2>
        <div className="social-icons text-center">
          <a href="https://open.spotify.com/artist/2QXqvD5l5HpnpS95kcEvl3?si=g9vfIxaXTp2FfCNwLUhhaw" className="mx-3" style={{ fontSize: "2rem" }}>
            <i className="bi bi-spotify"></i>
          </a>
          <a href="https://instagram.com/griever_it?igshid=MTIyMzRjYmRlZg==" className="mx-3" style={{ fontSize: "2rem" }} >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@griever_it" className="mx-3" style={{ fontSize: "2rem" }} >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </section >
    </div >
  );
}
