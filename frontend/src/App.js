import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>                                                                                     {/* if we dont your page to reload then use react router, and if you want to reload your webpage then use href link */}
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />                                              {/* in version 6 of route we use element, .  In react router 6 you cannot have anything in the routes tag */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
