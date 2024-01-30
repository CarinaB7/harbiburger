function Contact() {
  return (
    <section className="contact">
      <article>
        <h3>Kontakt</h3>
        <p>Montags - Sonntags: ab 11Uhr</p>
        <p>Seestraße 26, 13353 Berlin</p>
        <p>info@harbiburger.de</p>
        <p>01522/2706657</p>
      </article>
      <div className="map">
        <iframe
          className="smallmap"
          width="290"
          height="200"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=290&amp;height=200&amp;hl=en&amp;q=Seestra%C3%9Fe%2026%20Berlin+(Harbi%20Burger)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <iframe className="bigmap"
          width="375"
          height="250"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=375&amp;height=250&amp;hl=en&amp;q=Seestra%C3%9Fe%2026%20Berlin+(Harbi%20Burger)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}
export default Contact;
