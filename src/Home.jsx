import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
      <div className="home">
        <img
        className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          srcset=""
        />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
        <Product
          id="1235321"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31M1lrW+xNL._AC_SY200_.jpg"
          />
        <Product
          id="1235321"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31M1lrW+xNL._AC_SY200_.jpg"
          />
      </div>
          </div>


  );
}

export default Home;
