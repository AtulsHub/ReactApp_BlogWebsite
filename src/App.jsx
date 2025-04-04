import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import service from "./appwrite/auth";
import "./App.css";
import { Header, Footer, RTE, Login, Signup } from "./components/index.js";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import AllPost from "./Pages/AllPost.jsx";

function App() {
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    service
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          console.log("User not logged in");
          
        }
      })
      .catch((error) => {
        console.error("Error in getCurrentUser:", error);
        dispatch(logout());
    })
      .finally(() => isLoading(false));
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App