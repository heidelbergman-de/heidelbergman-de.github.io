import React from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./css/header.module.css";
import clsx from "clsx";

import CountdownTimer from "./countdown.js";

const floatingDivs = [
  // {
  //   img_path: "img/startpage/header/s03.png",
  //   headline: "Anmeldung",
  //   text: "Melde dich jetzt an...",
  //   button_text: "Anmeldung",
  //   button_link: "https://heidelbergman2024.racepedia.de/",
  // },
  {
    img_path: "img/startpage/header/s03.png",
    headline: "Streckenchecks",
    text: "Streckenchecks 2025...",
    button_text: "Streckenchecks",
    button_link: "blog/2025/05/28/_streckenchecks/",
  },
  {
    img_path: "img/startpage/header/s01.png",
    headline: "Strecke",
    text: "Alle Infos zu der Strecke...",
    button_text: "Strecke",
    button_link: "/Strecke/Uebersicht",
  },
  // {
  //   img_path: "img/startpage/header/s02.png",
  //   headline: "Ergebnisse",
  //   text: "Die Ergebnisse des letzten HEIDELBERGMAN...",
  //   button_text: "Ergebnisse",
  //   button_link: "/Wettkampf/Ergebnisse/",
  // },
  {
    img_path: "img/startpage/header/s02.png",
    headline: "Hilf mit",
    text: "Hilf mit und werde Helfer...",
    button_text: "Hilf mit!",
    button_link:
      "https://docs.google.com/forms/d/e/1FAIpQLSf5CXVYr5MeiyXFXk8wXa-If2KhJK4iS5b3rnyoOJ8d5WIzAw/viewform",
  },
];

function FloatingDiv(props) {
  return (
    <div className={styles.floatingHeaderDiv}>
      <div className={styles.floatingDivRoundImageContainer}>
        <img
          className={styles.floatingHeaderDivImage}
          src={props.img_path}
          alt="Logo"
        />
      </div>
      <div className={styles.floatingHeaderDivTextField}>
        <h4 className={styles.floatingHeaderDivTextHeader}>{props.headline}</h4>
        <p className={styles.floatingHeaderDivTextDesc}>{props.text}</p>
        <div className={styles.floatingHeaderDivButton}>
          <Link
            className={`button button--primary button--lg ${styles.floatingHeaderDivButtonStyle}`}
            to={props.button_link}
          >
            {props.button_text}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // const root = document.documentElement;

  const HDLogo = siteConfig.customFields.HDLogo;

  const targetDate = new Date("2025-06-27T16:00:00.000Z").getTime();

  const anmeldeButton = (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Link
          className="button button--primary button--lg"
          to="https://heidelberg-triathlon-2025.racepedia.de/"
        >
          Anmeldung
        </Link>
      </div>
      {/* <div className={styles.button}>
        <Link
          className="button button--primary button--lg"
          to="https://larasch.de/fotoportal?1#9b7da5df-94b9-4610-abec-dda533e97b4f"
        >
          Race-Bilder
        </Link>
      </div> */}
    </div>
  );

  return (
    <header>
      <div className={styles.headerBackground}>
        <div className={styles.headerImageContainer}>
          <img
            className={styles.headerImageLogo}
            src={HDLogo}
            alt="HeidelbergMan Logo"
          />
        </div>

        <h1 className={styles.headerTagline}> Sonntag, 27. Juli 2025</h1>

        {/* <CountdownTimer
          targetDate={targetDate}
          text="Sicher dir einen der letzten 10 Startplätze in:"
          expiredNotice=""
        /> */}

        {anmeldeButton}

        <div className={styles.floatingHeaderDivGroup}>
          {floatingDivs.map((div, index) => (
            <FloatingDiv key={index} {...div} />
          ))}
        </div>
      </div>

      <video
        className={styles.headerBackgroundVideo}
        autoPlay
        loop
        muted
        poster="img/header/no_img.jpg"
      >
        <source src="vids/hdtri_short.webm" type="video/webm" />
        <source
          src="https://github.com/heidelbergman-de/heidelbergman-de.github.io/raw/main/static/vids/HDMan_teaser.webm"
          type="video/webm"
        />
      </video>
    </header>
  );
}
