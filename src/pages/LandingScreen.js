import React from "react";
import styles from "./LandingScreen.module.scss";
import Navbar from "../components/landing/navbar/Navbar";
import Footer from "../components/landing/footer/Footer";
import Hero from "../components/landing/hero/Hero";
import Technologies from "../components/landing/technologies/Technologies";
import Section from "../components/landing/section/Section";
import Benefits from "../components/landing/benefits/Benefits";
import Requeriments from "../components/landing/requeriments/Requeriments";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LandingScreen = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.landingContainer}>
      <div className={styles.navBarHero}>
        <Navbar />
        <div className={styles.firstSeparator}>
          <hr className={styles.firstLine} />
        </div>
        <Hero />
      </div>
      <Technologies />
      <Section />
      <Benefits />
      <hr className={styles.line} />
      <Requeriments />
      <Footer />

      <Link to={"/app"} className={styles.goToAppButton}>
        {t("goAppButton")}
      </Link>
    </div>
  );
};

export default LandingScreen;
