import "./App.scss";
import Home from "../components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Impressum from "../components/Impressum";
import Datasave from "../components/Datenschutz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="datas" element={<Datasave />} />
        <Route path="impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
