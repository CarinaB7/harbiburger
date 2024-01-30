function Menu() {
  return (
    <section className="menu">
      <div className="gridcon">
        <div className="griditem burger">
          <h2>Burger Classics</h2>
          <table className="he">
            <tr>
              <th></th>
              <th>Zutaten</th>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td className="detail">
                Beef, Zwiebeln, Saure Gurken, Ketchup, Senf
              </td>
            </tr>
            <tr>
              <td>Cheeseburger</td>
              <td className="detail">
                Beef, American Cheese, Zwiebel, Saure Gurken, Ketchup, Senf
              </td>
            </tr>
            <tr>
              <td>Chili Cheese Burger</td>
              <td className="detail">
                Beef, American Cheese, Chili-Cheese-Sauce, Jalapenos
              </td>
            </tr>
            <tr>
              <td>Hot Chili Burger</td>
              <td className="detail">
                Beef, American Cheese, Salat, Zwiebel, Jalapenos, Chili-Ketchup,
                Senf
              </td>
            </tr>
            <tr>
              <td>Karamell Burger</td>
              <td className="detail">
                Beef, American Cheese, Karamellisierte Zwiebel, Ketchup, Senf
              </td>
            </tr>
            <tr>
              <td>Chicken Burger</td>
              <td className="detail">
                Crispy Chicken, American Cheese, Salat, Tomate, Knoblauch-Mayo
              </td>
            </tr>
          </table>
        </div>

        <div className="griditem burgerspecial">
          <h2>Burger Specials</h2>
          <table className="he">
            <tr>
              <th></th>
              <th>Zutaten</th>
            </tr>
            <tr>
              <td>Orient Burger</td>
              <td className="detail">
                Beef, American Cheese, Sucuk, Salat, Tomate, Harissa-Mayo
              </td>
            </tr>
            <tr>
              <td>Premium Burger</td>
              <td className="detail">
                Beef, American Cheese, Pastirma, Rucola, Tomate, Harissa-Mayo
              </td>
            </tr>
            <tr>
              <td>Texas Smoke Burger</td>
              <td className="detail">
                Beef, American Cheese, knuspriges Rinder-Bacon, Coleslaw,
                BBQ-Sauce, Knoblauch-Mayo
              </td>
            </tr>
            <tr>
              <td>Cheeseburger Italia</td>
              <td className="detail">
                Beef, Mozzarella, Tomaten, Zwiebel, Rucola, Rotes-Pesto
              </td>
            </tr>
            <tr>
              <td>Chicken Burger Italia</td>
              <td className="detail">
                Crispy Chicken, Mozzarella, Tomaten, Zwiebeln, Rucola,
                Rotes-Pesto
              </td>
            </tr>
          </table>
        </div>

        <div className="griditem hotdogs">
          <h2>Hot Dogs</h2>
          <table className="he">
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Classic Hot Dog</td>
              <td className="detail">
                Ketchup, Senf, Saure Gurken, Röstzwiebel
              </td>
            </tr>
            <tr>
              <td>Classic Hot Dog mit Käse</td>
              <td className="detail">
                American Cheese, Ketchup, Senf, Saure Gurken, Röstzwiebel
              </td>
            </tr>
            <tr>
              <td>Chili-Cheese Hot Dog</td>
              <td className="detail">
                Jalapenos, Chili-Cheese Sauce, Ketchup, Röstzwiebel
              </td>
            </tr>
          </table>
        </div>

        <div className="griditem snacks">
          <h2>Snacks</h2>
          <table className="he">
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Chicken Snackbox</td>
              <td className="detail">
                4 Nuggets, 4 Chili-Cheese Nuggets, 4 Chicken Tenders und Auswahl
                aus 2 Dips
              </td>
            </tr>
            <tr>
              <td>Cheesy Snackbox</td>
              <td className="detail">
                4 Mozzarella Sticks, 4 Chili Cheese Nuggets, 4 Nuggets und
                Auswahl aus 2 Dips
              </td>
            </tr>
            <tr>
              <td>Coleslaw Snackbox</td>
              <td className="detail">
                4 Nuggets, 4 Chicken Tenders, Coleslaw und Auswahl aus 1 Dip
              </td>
            </tr>
            <tr>
              <td>Harbi Snackbox</td>
              <td className="detail">
                4 Nuggets, 4 Mozzarella Sticks, 4 Zwiebelringe und Auswahl aus 2
                Dips
              </td>
            </tr>
          </table>
        </div>

        <div className="griditem dessert">
          <h2>Desserts</h2>
          <article className="he">
            <p>Blaubeermuffin</p>
            <p>Schokomuffin</p>
            <p>6 Churros mit Zimt & Zucker und Nutelladip</p>
          </article>
        </div>

        {/* <div className="griditem extra">
          <h3>Extras</h3>
          <article className="he">
              <p>Beef, Crispy Chicken, Rinder Bacon, Sucuk, Pastirma, American Cheese, Mozzarella, Karamellisierte Zwiebel, Zwiebel, Röstzwiebel, 2 Zwiebelringe, Jalapeños, Gurken, Tomaten, Salat, BBQ-Sauce, Chili-Ketchup, Harissa-Mayo, Knoblauch-Mayo, Rotes-Pesto</p>
          </article>
        </div> */}

        <div className="griditem beilagen">
          <h2>Beilagen</h2>
          <h2 className="nohe">&</h2>
          <p className="he">
            Fries, Curly Fries, Sweet Potato Fries, Chili-Cheese Fries, Chicken
            Nuggets, Chili-Cheese Nuggets, Chicken Tenders, Zwiebel Ringe,
            Mozzarella Sticks, Coleslaw
          </p>
          <h2>Dips</h2>
          <p className="he">
            Chili-Ketchup, BBQ-Sauce, Mayo, Trüffel Mayo, Knoblauch Sour Cream,
            Cheese Sauce, Chili-Cheese Sauce,
          </p>
        </div>
      </div>
    </section>
  );
}
export default Menu;
