import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Listing from "./pages/Listing";
import Questions from "./pages/Questions";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Listing />} />
          <Route path="q" element={<Questions />} />
          <Route path="g/:id" element={<Detail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
