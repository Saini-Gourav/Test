import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NextPage from "./components/NextPage";

function App() {
  return <>

  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nextpage" element={<NextPage />} />
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
