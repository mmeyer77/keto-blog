import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards.js";
import LatestPost from "./latestPost-component.js";
import QuickLinks from "./quick-links-component.js";
import Suscripcion from "./suscripcion-row.js";

function Home(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getlastArticle();
  }, []);

  async function getlastArticle() {
    const res = await axios.get(
      `https://ketoparatubolsillo.com/articles/latest`
    );
    setArticle(res.data);
  }

  function renderlastArticle() {
    //this is for displaying divs of articles info
    return article.map((article) => {
      return <LatestPost article={article} key={article._id} />;
    });
  }

  return (
    <div id="homepage">
      {renderlastArticle()}
      <QuickLinks />
      <Cards />
      <Suscripcion />
    </div>
  );
}

export default Home;
