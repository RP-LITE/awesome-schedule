import { useState } from "react";
import Client from "./pages/Client";
import Provider from "./pages/Provider";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
          // path='/dashboard'
          // // element={
          // // //   accountType === "provider" ? (
          // // //     <Navigate to='/provider' />
          // // //   ) : (
          // // //     <Client />
          // // //   )
          // // }
          />
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
