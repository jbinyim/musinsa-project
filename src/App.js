import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import ProductAll from "./components/ProductAll";
import NavBar from "./components/NavBar";
import PrivteRoute from "./components/PrivteRoute";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [authenticate, setAuthenticaste] = useState(false);
  useEffect(() => {}, [authenticate]);
  return (
    <div className="App">
      <NavBar authenticate={authenticate} setAuthenticaste={setAuthenticaste} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticaste={setAuthenticaste} />}
        />
        <Route
          path="/product/:id"
          element={<PrivteRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
