import React from "react";
import styles from "./LandingScreen.module.scss";
import Navbar from "../components/landing/navbar/Navbar";
import Footer from "../components/landing/footer/Footer";
import Hero from "../components/landing/hero/Hero";
import Hero2 from "../components/landing/hero2/Hero2";
import Section from "../components/landing/section/Section";
import Benefits from "../components/landing/benefits/Benefits";
import Requeriments from "../components/landing/requeriments/Requeriments";

const LandingScreen = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.navBarHero}>
        <Navbar />
        <Hero />
      </div>
      <Hero2 />
      <Section />
      <Benefits />
      <hr className={styles.line} />
      <Requeriments />
      <Footer />
    </div>
  );
};

export default LandingScreen;
