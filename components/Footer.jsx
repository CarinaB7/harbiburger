import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="footer">
      <Link to="/impressum" className="links">Impressum</Link>

      <Link to="/datas" className="links">
        Datenschutz
      </Link>
      <div className="social">
        <a
          href="https://www.ubereats.com/de/store/harbi-burger/HI4DyBZhUTynXzD65JhWTQ?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkhhcmJpJTIwRCVDMyVCNm5lciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpkVThUcGdOYnFFY1JsVm1EcU1aSDVFcyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E1Mi40NTYyNzc5JTJDJTIybG9uZ2l0dWRlJTIyJTNBMTMuMzIzOTAyOCU3RA%3D%3D&ps=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="uber logo"></div>
        </a>
        <a
          href="https://www.lieferando.de/en/menu/harbi-burger"
          target="_blank"
          rel="noreferrer"
        >
          <div className="liefer logo"></div>
        </a>
      </div>
    </section>
  );
}
export default Footer;
