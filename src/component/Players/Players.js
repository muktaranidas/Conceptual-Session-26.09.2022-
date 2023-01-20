import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, cart, setCart }) => {
  //   console.log(players);
  return (
    <div>
      <div className="cart-Container">
        {players.map((pd) => (
          <SinglePlayer
            player={pd}
            key={pd?.id}
            cart={cart}
            setCart={setCart}
          ></SinglePlayer> ///pd.id
        ))}
      </div>
    </div>
  );
};

export default Players;
