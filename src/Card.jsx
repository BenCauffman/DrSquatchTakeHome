import { useState, useEffect } from "react";

const COLORS = {
  woodsy: "#165834",
  citrus: "#de7c00",
  fresh: "#006fd6",
  herbal: "#5a3714",
  rich: "#e0a17e",
  spiced: "#c10000",
};
const Card = ({
  handle,
  title,
  products_included,
  price,
  originalPrice,
  imageSrc,
  scents,
}) => {
  const [products, setProducts] = useState("");

  function convertProducts() {
    const seenProducts = {};
    products_included.forEach((product) => {
      if (seenProducts[product]) {
        seenProducts[product]++;
      } else {
        seenProducts[product] = 1;
      }
    });
    setProducts(seenProducts);
  }

  useEffect(() => {
    convertProducts();
  });

  return (
    <div className="card">
      <img src={imageSrc}></img>
      <h3>{title}</h3>
      <div className="details">
        <div className="prices">
          {price !== originalPrice ? (
            <>
              <h5 id="oldprice">{`$${originalPrice
                .toString()
                .slice(0, 2)}`}</h5>
              <h5 id="newprice">{`$${price.toString().slice(0, 2)}`}</h5>
            </>
          ) : (
            <h5 id="newprice">{`${price.toString().slice(0, 2)}`}</h5>
          )}
        </div>
        <div className="scentList">
          {scents.map((scent) => {
            console.log(scent);
            switch (scent) {
              case "woodsy":
                return (
                  <div
                    color="white"
                    style={{ backgroundColor: `${COLORS.woodsy}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );

              case "citrus":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.citrus}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "fresh":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.fresh}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "herbal":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.herbal}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "rich":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.rich}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "spiced":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.spiced}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              default:
                return;
            }
          })}
        </div>
        <span>Included</span>
        <p>
          {products_included.map((product) => {
            const seenProducts = {};
            seenProducts.product = 1;
            return <p>{product}</p>;
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
