import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  //   console.log(player);
  const { idPlayer, strPlayer, strCutout } = player;
  const handlerAddToCart = () => {
    const info = {
      idPlayer,
      strPlayer,
      strCutout,
      price: 115,
    };
    // setCart(info);
    const newPlayer = [info];
    setCart(newPlayer);
    // console.log(newPlayer);
  };
  console.log(cart);
  return (
    <div className="card">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      {/* <p>
        {strDescriptionEN
          ? strDescriptionEN?.slice(0, 60)
          : "Lorem nddjf nfdjfjfj fhhfhfhf hfhfhfffffffffff hdhdhdh"}
      </p> */}
      <button className="card-btn">Details</button>
      <button onClick={handlerAddToCart} className="card-btn">
        Add To Cart
      </button>
      <button className="card-btn">Bookmark</button>
    </div>
  );
};

export default SinglePlayer;
