import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { MainHeader } from "./Components/MainHeader";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Components/routes/AppRouter";
import { AuthProvider } from "./Components/contexts/Authcontext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routing />
        <div className="w-100 h-100">
          <ToastContainer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
