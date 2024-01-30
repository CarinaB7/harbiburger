import Footer from "./Footer";
import Header from "./Header";
function Impressum() {
  return (
    <div>
        <Header/>
        <section className="impressum">
            <h1>Impressum</h1>

            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>
                Biyan Orhan
                <br />
                Seestra&szlig;e 26
                <br />
                13353 Berlin
            </p>

            <p>
                Handelsregister: 244594
                <br />
                Registergericht: Berlin
            </p>

            <p>
                <strong>Vertreten durch:</strong>
                <br />
                Biyan Pascal Orhan
            </p>

            <h2>Kontakt</h2>
            <p>
                Telefon: 015222706657
                <br />
                E-Mail: info@harbiburger.de
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:
                <br />
                DE361810564
            </p>

            <h2>
                Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
            </h2>
            <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p>
                Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
            </p>

        </section>
        <Footer/>
    </div>
  );
}
export default Impressum;