import Header from "../components/Header";
import About from "../components/About";
import Scroll from "../components/Scroll";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";

function Home(){
    return(
        <main>
        <Helmet>
          <title>Harbi Burger</title>
          <link rel="icon" type="image/png" href="/cheese-burger.png" />
        </Helmet>
        <Header />
        <About />
        <Scroll />
        <Menu />
        <Contact />
        <Footer />
      </main>
    )
}
export default Home;