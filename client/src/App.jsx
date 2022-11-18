import { useEffect, useState } from "react";
import Client from "./pages/Client";
import Provider from "./pages/Provider";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Auth from "./utils/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Client />
                <Provider />
              </ProtectedRoute>
            }
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
