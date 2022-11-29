import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Client from "./pages/Client";
import Provider from "./pages/Provider";
import HomePage from "./pages/HomePage";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

import Auth from "./utils/Auth";
import { ProtectedRoute, SideBarProt } from "./utils/ProtectedRoute";
import { UserProvider } from "@/utils/UserContext";
import background from "./assets/Background.png";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <SideBarProt>
          <Sidebar />
        </SideBarProt>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/dashboard/*'
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
      </UserProvider>
    </Router>
  );
}

export default App;
