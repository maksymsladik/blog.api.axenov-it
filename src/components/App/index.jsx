import React from "react";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Router from "../Router";
import style from "./style.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Router />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
