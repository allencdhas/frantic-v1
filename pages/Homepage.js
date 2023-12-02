import React from "react";
import Navbar from "../components/Navbar";
import Services from "./Services";
import styles from "@/styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <div className={styles.home}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.title}>FRANTIC</h1>
          <p></p>
        </div>
        <canvas style="display: block; width: 1200px; height: 1200px;" data-engine="three.js r149" width="930" height="930"></canvas>
      </div>

      <Services />
    </div>
  );
};

export default Homepage;
