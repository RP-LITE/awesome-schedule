import { useState } from "react";
import Client from "./pages/Client";
import Provider from "./pages/Provider";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/client' element={<Client />} />
          <Route path='/provider' element={<Provider />} />
          <Route
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
