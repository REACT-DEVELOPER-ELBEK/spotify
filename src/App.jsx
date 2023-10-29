import { Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard/Dashboard";
import './fonts/style.css'
import './App.css'

// client-id and secret variable
const CLIENT_ID = "d36c9649b18e45de98cd473d38f88580";
const CLIENT_SECRET = "30d130b000bc4c2b8eba9e2b4f847060";

const App = () => {
  const getToken = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
        },
        body: "grant_type=client_credentials",
      });
      const auth = await response.json();
      localStorage.setItem(
        "access_token",
        `${auth.token_type} ${auth.access_token}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  getToken();

  return (
    <>
      <Dashboard />
      <Routes>
        <Route />
      </Routes>
    </>
  );
};

export default App;
