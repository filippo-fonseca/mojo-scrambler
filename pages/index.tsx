import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PeopleInputView from "./PeopleInputView";

export default function Home() {
  const [input, setInput] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mojo <a href="https://nextjs.org">Scrambler</a>
        </h1>

        <p className={styles.description}>
          Get started by creating a new group scramble!
        </p>

        <button
          style={{
            padding: "10px",
            backgroundColor: "#0170f3",
            color: "#ffffff",
            border: "none",
            fontWeight: "bold",
            borderRadius: "50px",
            outline: "none",
          }}
          onClick={() => {
            setInput(!input);
          }}
        >
          {input ? "Close" : "New Group"}
        </button>

        {input ? <PeopleInputView /> : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/filippo-fonseca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created and maintained by Filippo Fonseca{" "}
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1051/1051326.svg"
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
