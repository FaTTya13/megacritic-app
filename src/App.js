import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/Home/LoginPage/LoginPage";
import RegistrationPage from "./pages/Home/RegistrationPage/RegistrationPage";
import Profile from "./pages/Home/Profile/Profile";
import Users from "./components/Users";
import { useState, useEffect } from "react";
import Protected from "./components/Protected";
import axios from "axios";
import Cookies from "universal-cookie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./pages/Home/Section/Section";
import MainPage from "./pages/Home/MainPage/MainPage";

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();

  const successHandler = (data) => {
    // сюда приходит дата из логина !!!
    cookies.set("token", `${data.jwtToken}`, {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
  };

  const failureHandler = () => {
    console.log("Error!");
  };

  const fetchUsers = async () => {
    const headers = {
      Authorization: `Bearer ${cookies.get("token")}`,
    };
    try {
      const response = await axios.get("http://localhost:5000/users", {
        headers,
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch users on component mount
    fetchUsers();
  }, []);

  if (loading) {
    // Show a loading indicator or placeholder while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/signin"
          element={
            <LoginPage onSuccess={successHandler} onFail={failureHandler} />
          }
        />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route
          path="/users"
          element={
            <Protected users={users}>
              <Users users={users} />
            </Protected>
          }
        />
        <Route path="/games" element={<Section />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
