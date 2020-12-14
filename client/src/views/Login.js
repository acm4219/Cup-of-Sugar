import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Banner from '../components/Banner/Banner';
import Footer from "../components/Footer/Footer"
import "../components/Banner/banner.css"

const Login = () => {
  const { isAuthenticated } = useAuth0();

    return !isAuthenticated && (
      <div className="background-image">
        <Banner />      
        <Footer />
      </div>
    )
};

export default Login;