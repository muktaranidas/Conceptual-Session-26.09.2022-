import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  //   console.log(players);

  //   const handleChange = (e) => {
  //     // console.log(e.target.value);
  //     setSearch(e.target.value);
  //   };

  return (
    <div>
      <div className="home-container">
        <div className="left-side">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          <button className="search-btn">Search</button>
          <div className="players-container">
            <Players players={players} cart={cart} setCart={setCart}></Players>
          </div>
        </div>
        <div className="right-side">
          <div className="cart">
            <p>This Is Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
