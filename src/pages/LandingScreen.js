import React from "react";
import styles from "./LandingScreen.module.scss";
import Navbar from "../components/landing/navbar/Navbar";
import Footer from "../components/landing/footer/Footer";

const LandingScreen = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Landing page</h1>
      <Footer />
    </>
  );
};

export default LandingScreen;
