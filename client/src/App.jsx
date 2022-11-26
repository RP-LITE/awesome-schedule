import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Client from "./pages/Client";
import Provider from "./pages/Provider";
import HomePage from "./pages/HomePage";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css"

import ProtectedRoute from "./utils/ProtectedRoute";
import { UserProvider } from '@/utils/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Sidebar />
        <div className="page-container">
        <div className="content-wrap">
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
        </div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
